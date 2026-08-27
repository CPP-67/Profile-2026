// เปิด/ปิดเมนูบนมือถือ
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
});

// ปิดเมนูอัตโนมัติเมื่อคลิกลิงก์ (บนมือถือ)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
  });
});

// แสดงปีปัจจุบันใน footer
document.getElementById('year').textContent = new Date().getFullYear();
