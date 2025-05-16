
const token = '7990072284:AAGzwV3xzJyv3PYOziJw69qa7dgkdbprgm4';
const chatId = '6313594797';

function sendToTelegram(name, phone, message) {
  const text = `Заявка з сайту ПК Майстер:\n\nІм’я: ${name}\nТелефон: ${phone}\nПроблема: ${message}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text })
  })
  .then(res => res.ok ? alert('Дякуємо! Заявка надіслана.') : alert('Помилка при надсиланні'))
  .catch(err => {
    console.error(err);
    alert('Помилка з’єднання з Telegram');
  });
}

document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.elements['name'].value;
  const phone = this.elements['phone'].value;
  const message = this.elements['message'].value;
  sendToTelegram(name, phone, message);
  this.reset();
});

document.querySelector('.overlay-modal form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('user-name').value;
  const phone = document.getElementById('user-phone').value;
  const message = document.getElementById('user-comment').value;
  sendToTelegram(name, phone, message);
  this.reset();
});
