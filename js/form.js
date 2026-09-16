const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function showFormMessage(message, success = false) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${success ? 'success' : 'error'}`;
}

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(0|\+84)[0-9]{9,10}$/;

  if (!name || !email || !phone || !message) return showFormMessage('Vui lòng nhập đầy đủ thông tin.');
  if (!emailPattern.test(email)) return showFormMessage('Email không đúng định dạng.');
  if (!phonePattern.test(phone.replace(/\s/g, ''))) return showFormMessage('Số điện thoại không đúng định dạng.');
  if (message.length < 10) return showFormMessage('Nội dung cần ít nhất 10 ký tự.');

  showFormMessage('Gửi liên hệ thành công! Cảm ơn bạn đã liên hệ.', true);
  contactForm.reset();
});
