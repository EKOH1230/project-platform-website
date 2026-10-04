import { answerQuestion } from './assistant-core.mjs';

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = new URL('./assistant.css?v=assistant2', import.meta.url).href;
document.head.append(stylesheet);

const root = document.createElement('div');
root.className = 'assistant-root';
root.innerHTML = `
  <button class="assistant-launcher" type="button" aria-controls="assistant-panel" aria-expanded="false" aria-label="打开平台咨询助手">
    <span class="assistant-launcher-icon" aria-hidden="true">✦</span><span>咨询助手</span>
  </button>
  <section class="assistant-panel" id="assistant-panel" role="dialog" aria-label="平台咨询助手" hidden>
    <div class="assistant-head">
      <div><strong>平台咨询助手</strong><span>知识库试用版 · 免费</span></div>
      <button class="assistant-close" type="button" aria-label="关闭咨询助手">×</button>
    </div>
    <div class="assistant-messages" role="log" aria-live="polite" aria-relevant="additions text"></div>
    <div class="assistant-suggestions" aria-label="常见问题">
      <button type="button" data-question="你们公司是做什么的？">公司介绍</button>
      <button type="button" data-question="你们提供哪些服务？">服务介绍</button>
      <button type="button" data-question="如何采购设备？">采购流程</button>
      <button type="button" data-question="佣金怎么收？">费用状态</button>
    </div>
    <form class="assistant-form">
      <label for="assistant-question">你的问题</label>
      <div class="assistant-input-row">
        <textarea id="assistant-question" rows="2" maxlength="500" placeholder="例如：你们可以帮助欧洲买家做什么？" required></textarea>
        <button type="submit">发送</button>
      </div>
      <p>目前根据本站已公开资料自动答复，不调用外部 AI API，也不发送或保存对话。请勿填写敏感信息。</p>
    </form>
  </section>`;
document.body.append(root);

const launcher = root.querySelector('.assistant-launcher');
const panel = root.querySelector('.assistant-panel');
const close = root.querySelector('.assistant-close');
const messages = root.querySelector('.assistant-messages');
const form = root.querySelector('.assistant-form');
const input = root.querySelector('#assistant-question');

function addMessage(kind, text, links = []) {
  const bubble = document.createElement('div');
  bubble.className = `assistant-message ${kind}`;
  const body = document.createElement('p');
  body.textContent = text;
  bubble.append(body);
  if (links.length) {
    const sources = document.createElement('div');
    sources.className = 'assistant-sources';
    for (const link of links) {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = `${link.label} ↗`;
      sources.append(anchor);
    }
    bubble.append(sources);
  }
  messages.append(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function setOpen(open) {
  panel.hidden = !open;
  launcher.setAttribute('aria-expanded', String(open));
  launcher.setAttribute('aria-label', open ? '收起平台咨询助手' : '打开平台咨询助手');
  if (open) input.focus();
  else launcher.focus();
}

function ask(question) {
  const clean = question.trim();
  if (!clean) return;
  addMessage('visitor', clean);
  const result = answerQuestion(clean);
  addMessage('reply', result.answer, result.links);
  input.value = '';
  input.focus();
}

addMessage('reply', '你好！我可以根据本站公开资料介绍平台、服务、设备方向和合作流程。当前是知识库试用版；未确认的信息会明确说明。');
launcher.addEventListener('click', () => setOpen(panel.hidden));
close.addEventListener('click', () => setOpen(false));
form.addEventListener('submit', event => {
  event.preventDefault();
  ask(input.value);
});
input.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    form.requestSubmit();
  }
});
root.querySelectorAll('[data-question]').forEach(button => {
  button.addEventListener('click', () => ask(button.dataset.question));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !panel.hidden) setOpen(false);
});
