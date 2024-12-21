const openModalButton = document.querySelector('#openModal');
const overlay = document.querySelector('#overlay');
const modalWindow = document.querySelector('#modalWindow');
const loginButton = document.querySelector('#loginButton');
const registerbutton = document.querySelector('#registerButton');
const modalBorderButton = document.querySelector('.modalBorderButton');
const loginWindow = document.querySelector('.modalWindowLogin');
const registerWindow = document.querySelector('.modalWindowRegister');
const repeatPassword = document.querySelector('#repeatPasswordRegister');
const passwordRegister = document.querySelector('#passwordRegister');

const closeModal = () => {
    overlay.classList.remove('active');
    modalWindow.classList.remove('active');
};

openModalButton.addEventListener('click', () => {
    overlay.classList.add('active');
    modalWindow.classList.add('active');
});

overlay.addEventListener('click', closeModal);

loginTab.addEventListener("click", () => {
    modalBorderButton.style.transform = 'translateX(0)';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginWindow.classList.add('active');
    registerWindow.classList.remove('active');
});

registerTab.addEventListener("click", () => {
    modalBorderButton.style.transform = 'translateX(100%)';
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerWindow.classList.add('active');
    loginWindow.classList.remove('active');
});