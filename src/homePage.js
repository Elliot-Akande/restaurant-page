import ChefImg from './chef.jpg';

export default function homePage() {
    const main = document.querySelector('main');

    function render() {
        _clearMain();
        _renderContent();
    }

    function _clearMain() {
        main.textContent = '';
    }

    function _renderContent() {
        const card = document.createElement('div');

        card.classList.add('card');
        main.appendChild(card);

        const paraOne = document.createElement('p');
        paraOne.textContent = 'Bringing authentic, Italian pizza to Scotland';
        card.appendChild(paraOne);

        const paraTwo = document.createElement('p');
        paraTwo.textContent = 'Made with passion since 1903';
        card.appendChild(paraTwo);

        const img = document.createElement('img');
        img.src = ChefImg;
        card.appendChild(img);

        const paraThree = document.createElement('p');
        paraThree.textContent = 'Order online or come visit us!';
        card.appendChild(paraThree);

        contentDiv.appendChild(main);
    }

    return {
        render,
    }
};