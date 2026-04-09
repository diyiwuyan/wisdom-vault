/* ============================================
   大神认知知识库 · 全局交互脚本
   ============================================ */

// ---- 模型卡片折叠 ----
document.addEventListener('DOMContentLoaded', () => {

  // 模型卡片展开/收起
  document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      // 关闭其他
      document.querySelectorAll('.model-card.open').forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });

  // 搜索功能（金句库）
  const searchInput = document.getElementById('quote-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.quote-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    });
  }

  // 概念标签过滤
  document.querySelectorAll('.concept-filter-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const concept = tag.dataset.concept;
      const isActive = tag.classList.contains('active');

      document.querySelectorAll('.concept-filter-tag').forEach(t => t.classList.remove('active'));

      if (!isActive) {
        tag.classList.add('active');
        document.querySelectorAll('[data-concepts]').forEach(item => {
          const concepts = item.dataset.concepts.split(',');
          item.style.display = concepts.includes(concept) ? '' : 'none';
        });
      } else {
        document.querySelectorAll('[data-concepts]').forEach(item => {
          item.style.display = '';
        });
      }
    });
  });

  // 导航高亮
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('../', '').replace('./', ''))) {
      link.classList.add('active');
    }
  });

  // 滚动进入动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // 数字滚动动画
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  });

});

// ---- 工具函数 ----
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('已复制到剪贴板');
  });
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
    background: rgba(255,255,255,0.1); backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.15); border-radius: 40px;
    padding: 10px 20px; font-size: 13px; color: #f0f4ff;
    z-index: 9999; animation: fadeIn 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}
