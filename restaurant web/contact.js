document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // You can handle the form submission here
            document.getElementById('contact-message').innerText = `Thank you, ${name}! Your message has been sent.`;
            form.reset();
        } else {
            document.getElementById('contact-message').innerText = 'Please fill in all fields.';
        }
    });
});
