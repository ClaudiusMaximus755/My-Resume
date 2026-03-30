// Highlight the active nav link based on the current page
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a[data-page]').forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
  });
});

// Contact form — show success message on submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('form-success').classList.add('show');
  });
}
