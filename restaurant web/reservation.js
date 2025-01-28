document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        if (name && email && date && time && guests) {
            const message = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been received.`;
            showMessage(message, 'success');
            form.reset();
        } else {
            showMessage('Please fill in all fields.', 'danger');
        }
    });

    function showMessage(message, type) {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
    }
});
