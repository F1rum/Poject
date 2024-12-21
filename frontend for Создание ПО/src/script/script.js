const hamburgerMenu = document.getElementById('hamburgerMenu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
});



/* тут я попросил чат гпт написать что то в духе того что в modal.js, но он решил немного по другому */
const informationButtonTG = document.querySelector('#informationButtonTG');
const informationButtonWebsite = document.querySelector('#informationButtonWebsite');
const informationBorder = document.querySelector('.informationBorder');
const informationTextTG = document.querySelector('.informationTextTG');
const informationTextWebsite = document.querySelector('.informationTextWebsite');

// Функция переключения
function toggleInformation(selectedButton, inactiveButton, showText, hideText, borderPosition) {
    selectedButton.classList.add('active');
    inactiveButton.classList.remove('active');
    showText.style.display = 'block';
    hideText.style.display = 'none';
    informationBorder.style.transform = `translateX(${borderPosition})`;
}

// Клик на кнопку TG
informationButtonTG.addEventListener('click', () => {
    toggleInformation(
        informationButtonTG,
        informationButtonWebsite,
        informationTextTG,
        informationTextWebsite,
        '0%'
    );
});

// Клик на кнопку Website
informationButtonWebsite.addEventListener('click', () => {
    toggleInformation(
        informationButtonWebsite,
        informationButtonTG,
        informationTextWebsite,
        informationTextTG,
        '100%'
    );
});

// Инициализация
toggleInformation(
    informationButtonTG,
    informationButtonWebsite,
    informationTextTG,
    informationTextWebsite,
    '0%'
);