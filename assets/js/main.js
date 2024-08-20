let messageSent = false;

document.getElementById('sendBtn').addEventListener('click', async function() {
    const message = document.getElementById('message').value;
    const recipient = document.getElementById('recipient').value;

    try {
        const notification = await sendMessage(message, recipient);
        displayNotification(notification, 'success');
    } catch (error) {
        displayNotification(error, 'warning');
    }
});

async function sendMessage(message, recipient) {
    return new Promise((resolve, reject) => {
        if (!messageSent) {
            messageSent = true;
            resolve("Mensaje Enviado");
        } else {
            reject("Ya has enviado un mensaje. No puedes enviar otro");
        }
    });
}

function displayNotification(text, type) {
    const notificationContainer = document.getElementById('notification');
    notificationContainer.innerText = text;

    if (type === 'success') {
        notificationContainer.style.color = 'green';
        notificationContainer.style.backgroundColor = '#DFF2BF'; /* Verde claro */
    } else if (type === 'warning') {
        notificationContainer.style.color = '#d9534f'; /* Rojo */
        notificationContainer.style.backgroundColor = '#f8d7da'; /* Rosa claro */
    }

    notificationContainer.style.display = 'block'; // Muestra la notificación
}
