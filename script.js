const burger = document.getElementById('burger');
const links = document.getElementById('links');

if (burger && links) {
  burger.onclick = () => links.classList.toggle('open');
}

const tabs = document.getElementById('tabs');
if (tabs) {
  tabs.onclick = e => {
    const id = e.target.dataset.tab;
    if (!id) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === e.target));
    document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === id));
  };
}

document.querySelectorAll('.item').forEach(i => {
  const a = i.querySelector('.a');
  const q = i.querySelector('.q');
  if (q && a) {
    q.onclick = () => {
      i.classList.toggle('open');
      a.style.maxHeight = i.classList.contains('open') ? a.scrollHeight + 'px' : '0px';
    };
  }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.onsubmit = e => {
    e.preventDefault();
    alert('Thank you! Your expedition request has been sent to our concierge.');
    contactForm.reset();
  };
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}