// Public, reviewed website facts. Update these answers when the corresponding pages change.
export const knowledge = [
  {
    topic: 'fees',
    aliases: ['佣金', '收费', '服务费', '费用', '多少钱', '价格怎么定', '付费'],
    answer: '平台服务费与佣金档位尚未确定。具体服务范围、费用和责任需要按项目及正式合作协议确认；网站目前没有公布固定价格。',
    links: [{ label: '查看平台服务', href: 'services.html' }],
  },
  {
    topic: 'compliance',
    aliases: ['ce认证', 'ce', '认证', '合规', '证书', '欧盟法规', '检测'],
    answer: '平台计划先核对企业主体与基础商业信息；这不等于产品认证、欧盟市场批准或法律意见。涉及具体设备进入欧洲市场时，需要按适用要求另行评估，并可对接专业机构。',
    links: [{ label: '查看基础企业核查', href: 'suppliers.html' }, { label: '查看合规支持范围', href: 'services.html' }],
  },
  {
    topic: 'contact',
    aliases: ['如何联系', '联系你们', '联系方式', '邮箱', '电话', '微信', '怎么提交', '发给你们'],
    answer: '正式企业邮箱与联系方式尚未确定。当前需求页面只会在你的浏览器中生成可复制草稿，不会提交给平台或供应商。正式联络渠道上线后，网站会更新说明。',
    links: [{ label: '查看联系与下一步', href: 'about.html#contact' }, { label: '整理需求草稿', href: 'requirement.html' }],
  },
  {
    topic: 'supplier',
    aliases: ['供应商如何加入', '首批供应商', '供应商入驻', '加入平台', '成为供应商', '厂家合作', '厂商合作', 'supplier'],
    answer: '平台计划邀请首批经过筛选的供应商参与建设，目标规模为 30 家。拟提供资料整理、上线期展示及相关采购需求的匹配机会；具体权益、期限和加入方式仍待最终确认。',
    links: [{ label: '查看首批供应商计划', href: 'suppliers.html#founding' }],
  },
  {
    topic: 'services',
    aliases: ['哪些服务', '有什么服务', '提供什么服务', '服务介绍', '服务', '业务内容', '销售支持', '渠道匹配', '工厂考察'],
    answer: '平台计划提供供应商匹配、中国设备采购支持、欧洲渠道匹配、销售开发支持、工厂考察协调及欧盟合规流程支持。具体服务范围和责任会由单个项目及正式协议确认。',
    links: [{ label: '查看服务介绍', href: 'services.html' }],
  },
  {
    topic: 'buyer',
    aliases: ['怎么采购', '采购流程', '采购需求', '我要采购', '买设备', '找供应商', '询盘', 'buyer'],
    answer: '采购方可以先按场景、国家、数量、预算和时间整理需求草稿。平台计划协助筛选和沟通供应商；设备采购合同由 Buyer 与 Supplier 直接签署，设备货款直接支付给 Supplier。当前网站尚未开放真实询盘提交。',
    links: [{ label: '整理采购需求', href: 'requirement.html' }, { label: '查看交易方式', href: 'services.html' }],
  },
  {
    topic: 'products',
    aliases: ['产品类别', '设备类型', '咖啡设备', '奶茶设备', '冰淇淋', '煮面', '炒菜', '售卖机', '服务机器人', '产品', '设备'],
    answer: '第一阶段拟覆盖咖啡与饮品、烹饪与备餐、冰淇淋、智能售卖与无人零售、服务机器人，以及酒店和商业自动化。网站目前展示的是类别方向，尚无已核实的具体型号、价格或供应商目录。',
    links: [{ label: '浏览产品类别', href: 'products.html' }],
  },
  {
    topic: 'assistant',
    aliases: ['ai api', 'aiapi', 'api', '大模型', '模型接口', '模型训练', '智能客服', '咨询助手'],
    answer: '当前咨询助手免费使用本站专用知识库进行自动问答，没有接入生成式大模型。后续使用哪家 AI API 尚未确定；接入前会先明确费用、数据处理方式和可公开的知识范围。',
    links: [],
  },
  {
    topic: 'privacy',
    aliases: ['聊天记录', '隐私', '保存对话', '数据保存', '会上传吗', '会发送吗'],
    answer: '当前咨询助手在你的浏览器中匹配网站知识库，不调用外部 AI API，也不发送或保存对话。关闭或刷新页面后，当前对话不会作为账号记录保留。请不要在测试版中输入敏感个人信息。',
    links: [{ label: '查看网站当前阶段', href: 'about.html' }],
  },
  {
    topic: 'platform',
    aliases: ['你们公司', '公司介绍', '平台介绍', '你们是谁', '做什么的', 'project platform', '关于你们', '公司', '平台'],
    answer: 'Project Platform 是暂用名称，网站目前处于 V0 测试阶段。平台希望连接中国自动化设备制造商与欧洲企业采购方，先从餐饮、零售、酒店和商业场景切入，降低双方发现、了解和沟通的成本。正式品牌与法律主体信息尚未在网站公布。',
    links: [{ label: '查看关于我们', href: 'about.html' }],
  },
  {
    topic: 'markets',
    aliases: ['覆盖国家', '目标市场', '中国和欧洲', '欧洲市场', '国际市场'],
    answer: '平台初期聚焦中国供应端与欧洲需求端，先从商业自动化切入。未来希望扩展到更多地区，但当前网站没有公布具体国家的服务覆盖清单。',
    links: [{ label: '查看平台方向', href: 'about.html' }],
  },
  {
    topic: 'insights',
    aliases: ['行业文章', '采购指南', '行业内容', '新闻', '资讯'],
    answer: '行业内容栏目计划覆盖设备发现、采购指南、工厂与制造、欧洲市场进入和应用案例等主题。V0 网站尚未发布正式文章。',
    links: [{ label: '查看行业内容规划', href: 'insights.html' }],
  },
];

const fallback = {
  topic: 'unknown',
  answer: '目前的公开资料没有足够资料回答这个问题。我可以先介绍平台、服务、设备方向、采购流程、供应商计划或费用状态；涉及具体产品、认证或合作条件，请以日后核实的信息和正式协议为准。',
  links: [{ label: '查看关于我们', href: 'about.html' }, { label: '查看平台服务', href: 'services.html' }],
};

function normalize(value) {
  return String(value ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g, '');
}

export function answerQuestion(question) {
  const query = normalize(question);
  if (!query) return fallback;

  let best = fallback;
  let bestScore = 0;
  for (const entry of knowledge) {
    const score = Math.max(0, ...entry.aliases.map(alias => {
      const term = normalize(alias);
      if (!query.includes(term)) return 0;
      return term.length + (query === term ? 2 : 0);
    }));
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }
  return best;
}
