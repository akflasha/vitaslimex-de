function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const parent = question.parentElement;
      parent.classList.toggle('active');
    });
});