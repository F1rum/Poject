const hamburgerMenu = document.getElementById('hamburgerMenu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
});




const inputField = document.getElementById('chat');
const sendButton = document.querySelector('.send-button');
const messageContainer = document.createElement('div');
messageContainer.classList.add('messageContainer');
document.querySelector('.chatWindow').appendChild(messageContainer);


const addMessage = (message, type) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(type === 'user' ? 'messageUser' : 'messageAI');
    messageDiv.textContent = message;
    messageContainer.appendChild(messageDiv);

    messageContainer.scrollTop = messageContainer.scrollHeight;
};


sendButton.addEventListener('click', () => {
    const userMessage = inputField.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        inputField.value = '';


        setTimeout(() => {
            addMessage('Это пример ответа от AI.', 'ai');
        }, 1000);
    }
});


inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
