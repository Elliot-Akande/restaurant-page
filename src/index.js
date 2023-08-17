import './style.css'
import basicLayout from './basicLayout';
import homePage from './homePage';

//  Create elements consistent across pages
const defaultLayout = basicLayout();
defaultLayout.render();

const home = homePage();
home.render();

