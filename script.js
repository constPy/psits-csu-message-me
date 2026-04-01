
  emailjs.init('UX6DAsyKINOJELtFJ');

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send('service_aar3ob2', 'template_no9k2w8', {
      message: document.getElementById('message').value,
    })
    .then(function(response) {
      document.getElementById('status').textContent = 'Message sent!';
      document.getElementById('contactForm').reset();
    }, function(error) {
      document.getElementById('status').textContent = 'Failed to send message.';
      console.error('EmailJS error:', error);
    });
  });