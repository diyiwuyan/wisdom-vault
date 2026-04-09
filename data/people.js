// ══════════════════════════════════════════════════════════════
// 人物数据库 —— 唯一数据源
// 新增大神：只需在此数组末尾追加一条记录，全站自动更新
// ══════════════════════════════════════════════════════════════
window.WV_PEOPLE = [
  {
    id: 'munger',
    name: '查理·芒格',
    nameEn: 'Charlie Munger',
    nameShort: '芒格',
    emoji: '🦁',
    color: 'var(--munger)',
    born: 1924,
    died: 2023,
    title: '伯克希尔·哈撒韦副董事长',
    tagline: '多学科思维的集大成者',
    desc: '查理·芒格是沃伦·巴菲特的黄金搭档，伯克希尔·哈撒韦的副董事长。他以跨学科的「心智模型」思维体系著称，强调从物理、生物、心理、经济等多个学科提取核心规律，编织成思维网格来理解世界。',
    tags: ['投资', '思维', '哲学'],
    url: 'people/munger.html'
  },
  {
    id: 'naval',
    name: '纳瓦尔',
    nameEn: 'Naval Ravikant',
    nameShort: '纳瓦尔',
    emoji: '⚡',
    color: 'var(--naval)',
    born: 1974,
    died: null,
    title: 'AngelList 创始人',
    tagline: '财富与幸福的现代哲学家',
    desc: '纳瓦尔·拉维坎特是硅谷最具影响力的思想家之一。他以「如何不靠运气致富」的推文系列闻名，系统阐述了特定知识、杠杆、问责制等财富创造原则，同时深入探讨幸福、冥想和人生哲学。',
    tags: ['财富', '创业', '哲学'],
    url: 'people/naval.html'
  },
  {
    id: 'buffett',
    name: '沃伦·巴菲特',
    nameEn: 'Warren Buffett',
    nameShort: '巴菲特',
    emoji: '🏛️',
    color: 'var(--buffett)',
    born: 1930,
    died: null,
    title: '伯克希尔·哈撒韦 CEO',
    tagline: '价值投资的传奇践行者',
    desc: '沃伦·巴菲特是有史以来最成功的投资者之一。他将本杰明·格雷厄姆的价值投资理论与查理·芒格的「优秀企业」理念相结合，形成了独特的长期投资哲学：以合理价格买入优秀企业，永远持有。',
    tags: ['投资', '商业', '长期主义'],
    url: 'people/buffett.html'
  },
  {
    id: 'musk',
    name: '埃隆·马斯克',
    nameEn: 'Elon Musk',
    nameShort: '马斯克',
    emoji: '🚀',
    color: 'var(--musk)',
    born: 1971,
    died: null,
    title: 'SpaceX & Tesla CEO',
    tagline: '第一性原理的极端实践者',
    desc: '埃隆·马斯克是当代最具争议也最具影响力的企业家。他以「第一性原理」思维颠覆了航天、电动车、能源等多个行业，相信人类必须成为多星球物种，并以此为使命驱动 SpaceX 的每一个决策。',
    tags: ['工程', '创业', '使命'],
    url: 'people/musk.html'
  },
  {
    id: 'jobs',
    name: '史蒂夫·乔布斯',
    nameEn: 'Steve Jobs',
    nameShort: '乔布斯',
    emoji: '🍎',
    color: 'var(--jobs)',
    born: 1955,
    died: 2011,
    title: '苹果公司联合创始人',
    tagline: '技术与人文交叉点的产品诗人',
    desc: '史蒂夫·乔布斯是苹果公司的联合创始人，重新定义了个人电脑、音乐播放器、智能手机和平板电脑。他相信最好的产品诞生于技术与人文艺术的交叉点，以极致简洁和产品工艺著称。',
    tags: ['产品', '设计', '创新'],
    url: 'people/jobs.html'
  },
  {
    id: 'taleb',
    name: '纳西姆·塔勒布',
    nameEn: 'Nassim Nicholas Taleb',
    nameShort: '塔勒布',
    emoji: '🎲',
    color: 'var(--taleb)',
    born: 1960,
    died: null,
    title: '风险分析师 & 作家',
    tagline: '不确定性与反脆弱的思想先驱',
    desc: '纳西姆·尼古拉斯·塔勒布是「不确定性五部曲」的作者，包括《黑天鹅》《反脆弱》《切身利益》等。他挑战了现代风险管理的核心假设，提出反脆弱、黑天鹅、杠铃策略等原创概念。',
    tags: ['风险', '哲学', '不确定性'],
    url: 'people/taleb.html'
  }
];

// ── 便捷工具函数（全站通用）──────────────────────────────────

/** 根据 id 获取人物对象 */
window.WV_getPerson = function(id) {
  return window.WV_PEOPLE.find(p => p.id === id) || null;
};

/** 获取人物显示名（短名） */
window.WV_getPersonName = function(id) {
  const p = window.WV_getPerson(id);
  return p ? p.nameShort : id;
};

/** 获取人物颜色 */
window.WV_getPersonColor = function(id) {
  const p = window.WV_getPerson(id);
  return p ? p.color : '#888';
};

/**
 * 动态渲染侧边栏人物筛选按钮
 * @param {string} containerId  - 要插入按钮的容器元素 id
 * @param {Function} onClickFn  - 点击回调，签名：(personId, btnEl) => void
 * @param {Function} countFn    - 可选，返回每个人物的数量，签名：(personId) => number
 */
window.WV_renderPersonSidebar = function(containerId, onClickFn, countFn) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // 全部按钮
  const allCount = countFn ? WV_PEOPLE.reduce((s, p) => s + countFn(p.id), 0) : '';
  container.innerHTML = `
    <button class="filter-btn active" id="filter-person-all" onclick="(${onClickFn.toString()})('all', this)">
      <span>全部</span>
      <span class="count" id="count-all">${allCount}</span>
    </button>
    ${WV_PEOPLE.map(p => `
      <button class="filter-btn" id="filter-person-${p.id}" onclick="(${onClickFn.toString()})('${p.id}', this)">
        <span class="dot" style="background:${p.color}"></span>
        <span>${p.name}</span>
        <span class="count" id="count-${p.id}">${countFn ? countFn(p.id) : ''}</span>
      </button>
    `).join('')}
  `;
};

/**
 * 更新侧边栏人物计数
 * @param {Function} countFn - 签名：(personId) => number
 */
window.WV_updatePersonCounts = function(countFn) {
  const allEl = document.getElementById('count-all');
  if (allEl) allEl.textContent = WV_PEOPLE.reduce((s, p) => s + countFn(p.id), 0);
  WV_PEOPLE.forEach(p => {
    const el = document.getElementById('count-' + p.id);
    if (el) el.textContent = countFn(p.id);
  });
};

/**
 * 生成导航栏下拉菜单 HTML（供各页面调用）
 * @param {string} prefix - 相对路径前缀，如 '../' 或 ''
 */
window.WV_navDropdownHTML = function(prefix) {
  prefix = prefix || '';
  return `
    <li class="nav-dropdown">
      <span class="nav-dropdown-trigger">
        大神们
        <svg class="nav-dropdown-arrow" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,3 5,7 8,3"/></svg>
      </span>
      <div class="nav-dropdown-menu">
        ${WV_PEOPLE.map(p => `
          <a href="${prefix}${p.url}" class="nav-dropdown-item">
            <span class="nav-dropdown-dot" style="background:${p.color}"></span>${p.name}
          </a>
        `).join('')}
      </div>
    </li>
  `;
};
