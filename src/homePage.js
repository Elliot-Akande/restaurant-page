export default function homePage() {
    const contentDiv = document.querySelector('#content');

    function render() {
        _renderHeader();
        _renderBody();
        _renderFooter();
    }

    function _renderHeader() {
        const header = document.createElement('header');
        const title = document.createElement('h1');

        title.textContent = 'Cecchinni\'s';

        header.appendChild(title);
        contentDiv.appendChild(header);
    }

    function _renderBody() {
        const main = document.createElement('main');
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

    function _renderFooter() {
        const footer = document.createElement('footer');
        const para = document.createElement('p');

        para.textContent = 'Elliot Akande © 2023';

        footer.appendChild(para);
        contentDiv.appendChild(footer);
    }

    return {
        render,
    }
};