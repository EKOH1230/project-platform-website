import assert from 'node:assert/strict';
import test from 'node:test';
import { answerQuestion } from '../assets/assistant-core.mjs';

test('company question explains the platform without claiming a settled company identity', () => {
  const result = answerQuestion('你们公司是做什么的？');
  assert.equal(result.topic, 'platform');
  assert.match(result.answer, /中国.*欧洲/);
  assert.match(result.answer, /暂用名称/);
  assert.equal(result.links[0].href, 'about.html');
});

test('service question returns current service directions and a source', () => {
  const result = answerQuestion('你们提供哪些服务？');
  assert.equal(result.topic, 'services');
  assert.match(result.answer, /供应商匹配/);
  assert.match(result.answer, /欧洲渠道/);
  assert.equal(result.links[0].href, 'services.html');
});

test('fees question keeps unconfirmed commission rates explicit', () => {
  const result = answerQuestion('佣金怎么收？');
  assert.equal(result.topic, 'fees');
  assert.match(result.answer, /尚未确定/);
  assert.equal(result.links[0].href, 'services.html');
});

test('compliance question does not imply product certification', () => {
  const result = answerQuestion('你们有 CE 认证吗？');
  assert.equal(result.topic, 'compliance');
  assert.match(result.answer, /不等于产品认证/);
});

test('contact question does not pretend that inquiries are sent', () => {
  const result = answerQuestion('如何联系你们？');
  assert.equal(result.topic, 'contact');
  assert.match(result.answer, /尚未确定/);
  assert.match(result.answer, /不会提交/);
});

test('unknown question gives a bounded fallback', () => {
  const result = answerQuestion('火星天气怎么样？');
  assert.equal(result.topic, 'unknown');
  assert.match(result.answer, /没有足够资料/);
  assert.ok(result.links.length > 0);
});

test('AI provider question explains the current knowledge base and pending API choice', () => {
  const result = answerQuestion('你们用什么 AI API？');
  assert.equal(result.topic, 'assistant');
  assert.match(result.answer, /尚未确定/);
  assert.match(result.answer, /知识库/);
});
