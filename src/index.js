import './style.css'
import basicLayout from './basicLayout';
import homePage from './homePage';

//  Create elements consistent across pages
const defaultLayout = basicLayout();
defaultLayout.render();

const home = homePage();
home.render();

//  Nav event listeners
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', () => {
    const activeButton = document.querySelector('li.selected');
    activeButton.classList.toggle('selected');

    homeButton.classList.toggle('selected');
    home.render();
});

menuButton.addEventListener('click', () => {
    const activeButton = document.querySelector('li.selected');
    activeButton.classList.toggle('selected');

    menuButton.classList.toggle('selected');
    home.render();
});

contactButton.addEventListener('click', () => {
    const activeButton = document.querySelector('li.selected');
    activeButton.classList.toggle('selected');

    contactButton.classList.toggle('selected');
    home.render();
});