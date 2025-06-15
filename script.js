document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Tampilkan pesan sukses
    document.getElementById('responseMessage').innerText = `Terima kasih, ${name}! Kami akan menghubungi Anda di ${email}.`;

    // Reset form
    this.reset();
});