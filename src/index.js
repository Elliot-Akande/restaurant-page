import './style.css'
import basicLayout from './basicLayout';
import homePage from './homePage';
import contactPage from './contactPage';
import menuPage from './menuPage';

//  Create elements consistent across pages
const defaultLayout = basicLayout();
defaultLayout.render();

const home = homePage();
const menu = menuPage();
const contact = contactPage();

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
    menu.render();
});

contactButton.addEventListener('click', () => {
    const activeButton = document.querySelector('li.selected');
    activeButton.classList.toggle('selected');

    contactButton.classList.toggle('selected');
    contact.render();
});