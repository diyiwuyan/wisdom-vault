// 跨人物概念数据库
// 每个概念有：id, name, desc, tags, people（哪些人提过）, relatedConcepts（关联概念id）
window.WV_CONCEPTS = [
  {
    id: "compounding",
    name: "复利",
    nameEn: "Compounding",
    desc: "时间是财富最重要的原材料。复利不只是金融现象，知识、关系、声誉都遵循复利规律。",
    tags: ["财富", "时间", "投资"],
    people: ["buffett", "munger", "naval"],
    relatedConcepts: ["patience", "long-term", "wealth"],
    quoteCount: 12
  },
  {
    id: "moat",
    name: "护城河",
    nameEn: "Economic Moat",
    desc: "让竞争对手无法轻易复制的持久竞争优势。品牌、网络效应、转换成本、成本优势是四种主要形式。",
    tags: ["投资", "竞争", "商业"],
    people: ["buffett", "munger"],
    relatedConcepts: ["compounding", "circle-of-competence", "specific-knowledge"],
    quoteCount: 9
  },
  {
    id: "circle-of-competence",
    name: "能力圈",
    nameEn: "Circle of Competence",
    desc: "只在自己真正理解的领域做判断。知道边界在哪里，比扩大边界更重要。",
    tags: ["决策", "认知", "投资"],
    people: ["buffett", "munger"],
    relatedConcepts: ["moat", "inversion", "mental-models"],
    quoteCount: 8
  },
  {
    id: "mental-models",
    name: "心智模型",
    nameEn: "Mental Models",
    desc: "从各学科提取核心规律，编织成思维网格。孤立的事实没有价值，连接成网络才能产生洞察。",
    tags: ["思维", "学习", "决策"],
    people: ["munger"],
    relatedConcepts: ["inversion", "circle-of-competence", "lollapalooza"],
    quoteCount: 11
  },
  {
    id: "inversion",
    name: "逆向思考",
    nameEn: "Inversion",
    desc: "不问「怎么成功」，先问「怎么失败」。把所有灾难路径排除之后，剩下的选择自然不会太差。",
    tags: ["思维", "决策", "风险"],
    people: ["munger"],
    relatedConcepts: ["mental-models", "circle-of-competence", "margin-of-safety"],
    quoteCount: 7
  },
  {
    id: "specific-knowledge",
    name: "特定知识",
    nameEn: "Specific Knowledge",
    desc: "无法被标准化、批量生产的知识。只能通过好奇心驱动的自学获得，是真正不可替代的竞争优势。",
    tags: ["财富", "学习", "竞争"],
    people: ["naval"],
    relatedConcepts: ["leverage", "moat", "compounding"],
    quoteCount: 9
  },
  {
    id: "leverage",
    name: "杠杆",
    nameEn: "Leverage",
    desc: "用别人的时间、资本、代码或媒体放大你的劳动成果。代码和内容是无需许可的杠杆，是这个时代最强大的工具。",
    tags: ["财富", "商业", "效率"],
    people: ["naval"],
    relatedConcepts: ["specific-knowledge", "compounding", "wealth"],
    quoteCount: 8
  },
  {
    id: "wealth",
    name: "财富即自由",
    nameEn: "Wealth as Freedom",
    desc: "财富不是数字，是睡觉时也在赚的资产，是不需要做你不想做的事的能力。三位大神对财富的定义，殊途同归。",
    tags: ["财富", "自由", "人生"],
    people: ["buffett", "munger", "naval"],
    relatedConcepts: ["compounding", "leverage", "specific-knowledge"],
    quoteCount: 10
  },
  {
    id: "margin-of-safety",
    name: "安全边际",
    nameEn: "Margin of Safety",
    desc: "以远低于内在价值的价格买入，为判断失误留出缓冲空间。不确定性是常态，安全边际是应对不确定性的最优策略。",
    tags: ["投资", "风险", "决策"],
    people: ["buffett", "munger"],
    relatedConcepts: ["circle-of-competence", "inversion", "moat"],
    quoteCount: 7
  },
  {
    id: "long-term",
    name: "长期主义",
    nameEn: "Long-term Thinking",
    desc: "大多数人高估一年能做的事，低估十年能做的事。时间是长期主义者最强大的武器。",
    tags: ["时间", "投资", "人生"],
    people: ["buffett", "munger", "naval"],
    relatedConcepts: ["compounding", "patience", "wealth"],
    quoteCount: 9
  },
  {
    id: "patience",
    name: "耐心等待",
    nameEn: "Patience",
    desc: "不需要每个球都打，只需要在甜蜜区的球出现时全力挥棒。减少决策次数是提高决策质量的最简单方法。",
    tags: ["决策", "投资", "心理"],
    people: ["buffett", "munger"],
    relatedConcepts: ["long-term", "circle-of-competence", "inversion"],
    quoteCount: 6
  },
  {
    id: "lollapalooza",
    name: "Lollapalooza效应",
    nameEn: "Lollapalooza Effect",
    desc: "多种认知偏误同时作用，产生超线性的极端结果。理解这个效应，是理解人类非理性行为的关键。",
    tags: ["心理", "认知", "风险"],
    people: ["munger"],
    relatedConcepts: ["mental-models", "inversion", "cognitive-bias"],
    quoteCount: 4
  },
  {
    id: "cognitive-bias",
    name: "认知偏误",
    nameEn: "Cognitive Bias",
    desc: "人类大脑的系统性错误。芒格整理了25种最重要的认知偏误，是理解人类决策的基础工具。",
    tags: ["心理", "认知", "决策"],
    people: ["munger"],
    relatedConcepts: ["mental-models", "lollapalooza", "inversion"],
    quoteCount: 8
  },
  {
    id: "desire-management",
    name: "欲望管理",
    nameEn: "Desire Management",
    desc: "欲望是痛苦的契约。减少不必要的欲望，不是消极，而是提高判断质量、获得内心平静的主动选择。",
    tags: ["心理", "人生", "自由"],
    people: ["naval", "munger"],
    relatedConcepts: ["wealth", "long-term", "patience"],
    quoteCount: 6
  },
  {
    id: "lifelong-learning",
    name: "终身学习",
    nameEn: "Lifelong Learning",
    desc: "三位大神的共同底色。学习的复利效应超过任何其他投资，停止学习就是开始衰退。",
    tags: ["学习", "成长", "时间"],
    people: ["buffett", "munger", "naval"],
    relatedConcepts: ["compounding", "mental-models", "specific-knowledge"],
    quoteCount: 7
  },
  {
    id: "first-principles",
    name: "第一性原理",
    nameEn: "First Principles Thinking",
    desc: "把问题分解到最基本的事实，从零开始重建答案，而不是依赖类比和惯例。纳瓦尔和芒格都强调：真正的理解来自从基础出发，而不是从别人的结论出发。",
    tags: ["思维", "决策", "学习"],
    people: ["naval", "munger"],
    relatedConcepts: ["mental-models", "specific-knowledge", "inversion"],
    quoteCount: 4
  },
  {
    id: "accountability",
    name: "责任感",
    nameEn: "Accountability",
    desc: "用真实姓名承担风险，公开为自己的判断负责。纳瓦尔认为这是获得杠杆的前提——社会给予那些愿意承担声誉风险的人更多信任和机会。",
    tags: ["财富", "责任", "人生"],
    people: ["naval", "munger"],
    relatedConcepts: ["leverage", "specific-knowledge", "long-term"],
    quoteCount: 3
  },
  {
    id: "permissionless",
    name: "无需许可",
    nameEn: "Permissionless Leverage",
    desc: "互联网时代最重要的特征：代码、内容、创意可以在不需要任何人批准的情况下触达全球。这打破了传统的守门人结构，让个人可以直接积累影响力和财富。",
    tags: ["财富", "互联网", "自由"],
    people: ["naval"],
    relatedConcepts: ["leverage", "specific-knowledge", "wealth"],
    quoteCount: 3
  },
  {
    id: "happiness",
    name: "幸福即技能",
    nameEn: "Happiness as a Skill",
    desc: "幸福不是运气，不是外部条件的结果，而是一种可以主动培养的内在技能。纳瓦尔认为，减少欲望、活在当下、接受现实，是通往幸福的路径，而不是追求更多。",
    tags: ["幸福", "人生", "心理"],
    people: ["naval"],
    relatedConcepts: ["desire-management", "patience", "wealth"],
    quoteCount: 5
  },
  {
    id: "reading",
    name: "阅读方法论",
    nameEn: "Reading Philosophy",
    desc: "三位大神都是极度依赖阅读的人，但他们的阅读方式与众不同：读你真正好奇的，随时可以放弃，把书当工具而非任务，重读经典胜过追新书。",
    tags: ["阅读", "学习", "方法"],
    people: ["buffett", "munger", "naval"],
    relatedConcepts: ["lifelong-learning", "specific-knowledge", "compounding"],
    quoteCount: 4
  },

  // ── 马斯克专属概念 ──────────────────────────────────────────
  {
    id: "iteration",
    name: "快速迭代",
    nameEn: "Rapid Iteration",
    desc: "马斯克的核心工程哲学：快速失败、快速学习、快速改进。不要等到完美再发布，要在真实世界中测试和迭代。失败是数据，不是终点。",
    tags: ["工程", "创新", "方法"],
    people: ["musk"],
    relatedConcepts: ["first-principles", "long-term", "specific-knowledge"],
    quoteCount: 5
  },

  // ── 乔布斯专属概念 ──────────────────────────────────────────
  {
    id: "product-craft",
    name: "产品工艺",
    nameEn: "Product Craft",
    desc: "乔布斯对产品的极致追求：每一个细节都要完美，包括用户看不见的部分。真正的工匠精神不是为了展示，而是因为你知道它在那里。",
    tags: ["产品", "设计", "工艺"],
    people: ["jobs"],
    relatedConcepts: ["simplicity", "specific-knowledge", "first-principles"],
    quoteCount: 6
  },
  {
    id: "simplicity",
    name: "极致简洁",
    nameEn: "Radical Simplicity",
    desc: "乔布斯最核心的设计哲学：简单不是缺少什么，而是去掉所有不必要的东西之后剩下的。真正的简单需要深刻的理解和极大的勇气。",
    tags: ["设计", "思维", "产品"],
    people: ["jobs"],
    relatedConcepts: ["product-craft", "first-principles", "specific-knowledge"],
    quoteCount: 4
  },

  // ── 塔勒布专属概念 ──────────────────────────────────────────
  {
    id: "antifragile",
    name: "反脆弱",
    nameEn: "Antifragile",
    desc: "塔勒布最重要的原创概念：不只是抵抗冲击（韧性），而是从冲击中变得更强。自然界、创业、人体都是反脆弱系统。关键是拥抱适度的波动，避免极端脆弱。",
    tags: ["风险", "系统", "哲学"],
    people: ["taleb"],
    relatedConcepts: ["black-swan", "margin-of-safety", "skin-in-the-game"],
    quoteCount: 6
  },
  {
    id: "black-swan",
    name: "黑天鹅",
    nameEn: "Black Swan",
    desc: "极端罕见、不可预测、但事后看来似乎有迹可循的高影响力事件。塔勒布认为，历史是由黑天鹅驱动的，而我们的思维系统性地低估了它们的概率和影响。",
    tags: ["风险", "不确定性", "历史"],
    people: ["taleb"],
    relatedConcepts: ["antifragile", "margin-of-safety", "mental-models"],
    quoteCount: 4
  },
  {
    id: "skin-in-the-game",
    name: "切身利益",
    nameEn: "Skin in the Game",
    desc: "塔勒布的道德与认识论原则：只有当你承担自己建议的后果时，你的建议才是可信的。没有切身利益的专家是危险的，因为他们的错误由别人承担。",
    tags: ["道德", "决策", "激励"],
    people: ["taleb"],
    relatedConcepts: ["accountability", "leverage", "margin-of-safety"],
    quoteCount: 5
  },

  // ── 马斯克补充概念 ──────────────────────────────────────────
  {
    id: "idiot-index",
    name: "白痴指数",
    nameEn: "Idiot Index",
    desc: "马斯克发明的成本审查工具：零件成本与原材料成本之比。比值越高，说明制造过程越低效。马斯克用它来识别供应链中的浪费，倒逼工程师重新设计。",
    tags: ["工程", "成本", "效率"],
    people: ["musk"],
    relatedConcepts: ["first-principles", "iteration"],
    quoteCount: 3
  },
  {
    id: "algorithm",
    name: "马斯克五步算法",
    nameEn: "The Algorithm",
    desc: "马斯克的工程优化五步法：①质疑每个需求；②删除所有不必要的部分；③简化和优化；④加速循环；⑤自动化。顺序不能颠倒——自动化一个不必要的流程只会更快地犯错。",
    tags: ["工程", "流程", "效率"],
    people: ["musk"],
    relatedConcepts: ["first-principles", "iteration", "simplicity"],
    quoteCount: 4
  },
  {
    id: "mission-driven",
    name: "使命驱动",
    nameEn: "Mission-Driven",
    desc: "马斯克认为，伟大的公司必须有超越盈利的使命。SpaceX 的使命是让人类成为多星球物种，Tesla 的使命是加速可持续能源转型。使命是吸引顶尖人才、穿越低谷的核心动力。",
    tags: ["使命", "创业", "领导力"],
    people: ["musk"],
    relatedConcepts: ["long-term", "first-principles", "accountability"],
    quoteCount: 5
  },

  // ── 乔布斯补充概念 ──────────────────────────────────────────
  {
    id: "reality-distortion",
    name: "现实扭曲力场",
    nameEn: "Reality Distortion Field",
    desc: "乔布斯的同事用来描述他的一种能力：通过极度自信和感染力，让人相信不可能的事情是可能的，从而激发团队超越自我认知的极限。这既是领导力，也是一种危险的操控。",
    tags: ["领导力", "创新", "心理"],
    people: ["jobs"],
    relatedConcepts: ["product-craft", "simplicity", "specific-knowledge"],
    quoteCount: 3
  },
  {
    id: "intersection",
    name: "技术与人文的交叉",
    nameEn: "Intersection of Technology and Humanities",
    desc: "乔布斯最核心的信念：最好的产品诞生于技术与人文艺术的交叉点。苹果的差异化不在于技术领先，而在于技术与人性洞察的结合。",
    tags: ["产品", "设计", "创新"],
    people: ["jobs"],
    relatedConcepts: ["product-craft", "simplicity", "specific-knowledge"],
    quoteCount: 4
  },
  {
    id: "focus",
    name: "专注的力量",
    nameEn: "Power of Focus",
    desc: "乔布斯回归苹果后做的第一件事是砍掉 70% 的产品线。他认为，专注意味着对一千件好事说「不」，只做最重要的那一件。苹果的成功很大程度上来自于它拒绝做什么。",
    tags: ["战略", "产品", "决策"],
    people: ["jobs"],
    relatedConcepts: ["simplicity", "product-craft", "inversion"],
    quoteCount: 5
  },

  // ── 塔勒布补充概念 ──────────────────────────────────────────
  {
    id: "via-negativa",
    name: "否定之路",
    nameEn: "Via Negativa",
    desc: "塔勒布从古典哲学借来的概念：通过减法而非加法来改善。不要问「我应该做什么」，而要问「我应该停止做什么」。医学、饮食、决策都适用：少干预往往比多干预更好。",
    tags: ["哲学", "决策", "健康"],
    people: ["taleb"],
    relatedConcepts: ["inversion", "antifragile", "margin-of-safety"],
    quoteCount: 3
  },
  {
    id: "barbell-strategy",
    name: "杠铃策略",
    nameEn: "Barbell Strategy",
    desc: "塔勒布的风险管理框架：将资产分配在两个极端——极度安全（如国债）和极度激进（如期权）——避开中间地带。这样既能抵御黑天鹅，又能从极端事件中获益。",
    tags: ["投资", "风险", "策略"],
    people: ["taleb"],
    relatedConcepts: ["antifragile", "black-swan", "margin-of-safety"],
    quoteCount: 4
  },
  {
    id: "lindy-effect",
    name: "林迪效应",
    nameEn: "Lindy Effect",
    desc: "塔勒布推广的概念：对于非易腐事物（书籍、技术、思想），已经存在的时间越长，预期还能存在的时间就越长。一本书存在了100年，很可能还能再存在100年。",
    tags: ["时间", "预测", "哲学"],
    people: ["taleb"],
    relatedConcepts: ["antifragile", "long-term", "compounding"],
    quoteCount: 3
  }
];

// 概念之间的连接关系（用于知识图谱）
window.WV_CONCEPT_LINKS = [
  { source: "compounding", target: "long-term", strength: 3 },
  { source: "compounding", target: "wealth", strength: 3 },
  { source: "compounding", target: "lifelong-learning", strength: 2 },
  { source: "moat", target: "circle-of-competence", strength: 3 },
  { source: "moat", target: "compounding", strength: 2 },
  { source: "moat", target: "specific-knowledge", strength: 2 },
  { source: "circle-of-competence", target: "inversion", strength: 3 },
  { source: "circle-of-competence", target: "margin-of-safety", strength: 2 },
  { source: "mental-models", target: "inversion", strength: 3 },
  { source: "mental-models", target: "cognitive-bias", strength: 3 },
  { source: "mental-models", target: "lollapalooza", strength: 2 },
  { source: "inversion", target: "margin-of-safety", strength: 2 },
  { source: "inversion", target: "patience", strength: 2 },
  { source: "specific-knowledge", target: "leverage", strength: 3 },
  { source: "specific-knowledge", target: "wealth", strength: 2 },
  { source: "leverage", target: "wealth", strength: 3 },
  { source: "leverage", target: "compounding", strength: 2 },
  { source: "wealth", target: "long-term", strength: 2 },
  { source: "wealth", target: "desire-management", strength: 2 },
  { source: "patience", target: "long-term", strength: 3 },
  { source: "lollapalooza", target: "cognitive-bias", strength: 3 },
  { source: "desire-management", target: "patience", strength: 2 },
  { source: "lifelong-learning", target: "mental-models", strength: 2 },
  { source: "lifelong-learning", target: "specific-knowledge", strength: 2 },
  { source: "first-principles", target: "mental-models", strength: 3 },
  { source: "first-principles", target: "inversion", strength: 2 },
  { source: "first-principles", target: "specific-knowledge", strength: 2 },
  { source: "accountability", target: "leverage", strength: 3 },
  { source: "accountability", target: "specific-knowledge", strength: 2 },
  { source: "permissionless", target: "leverage", strength: 3 },
  { source: "permissionless", target: "wealth", strength: 2 },
  { source: "happiness", target: "desire-management", strength: 3 },
  { source: "happiness", target: "wealth", strength: 2 },
  { source: "reading", target: "lifelong-learning", strength: 3 },
  { source: "reading", target: "compounding", strength: 2 },
  { source: "reading", target: "specific-knowledge", strength: 2 },
  // 马斯克相关
  { source: "first-principles", target: "iteration", strength: 3 },
  { source: "iteration", target: "long-term", strength: 2 },
  { source: "iteration", target: "specific-knowledge", strength: 2 },
  // 乔布斯相关
  { source: "product-craft", target: "simplicity", strength: 3 },
  { source: "product-craft", target: "specific-knowledge", strength: 2 },
  { source: "simplicity", target: "first-principles", strength: 2 },
  // 塔勒布相关
  { source: "antifragile", target: "black-swan", strength: 3 },
  { source: "antifragile", target: "margin-of-safety", strength: 3 },
  { source: "skin-in-the-game", target: "accountability", strength: 3 },
  { source: "black-swan", target: "margin-of-safety", strength: 2 },
  { source: "skin-in-the-game", target: "leverage", strength: 2 }
];
