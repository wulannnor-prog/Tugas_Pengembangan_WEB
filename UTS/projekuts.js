const registrationForm = document.querySelector("#registration-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Pendaftaran berhasil! Terima kasih telah bergabung dengan Glow & Gather.");

        registrationForm.reset();
    });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Pesan kamu berhasil dikirim. Terima kasih telah menghubungi Glow & Gather!");

        contactForm.reset();
    });
}
