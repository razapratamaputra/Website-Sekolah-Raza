document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('responseMessage').innerText = `Terima kasih, ${name}! Kami akan menghubungi Anda di ${email}.`;

    this.reset();
});
