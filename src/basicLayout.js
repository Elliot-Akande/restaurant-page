export default function basicLayout() {
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

        const nav = document.createElement('nav');
        header.appendChild(nav);

        const list = document.createElement('ul');
        nav.appendChild(list);

        const itemOne = document.createElement('li');
        const itemTwo = document.createElement('li');
        const itemThree = document.createElement('li');
        list.appendChild(itemOne);
        list.appendChild(itemTwo);
        list.appendChild(itemThree);

        itemOne.textContent = 'Home';
        itemTwo.textContent = 'Menu';
        itemThree.textContent = 'Contact';

        itemOne.classList.add('home-button');
        itemTwo.classList.add('menu-button');
        itemThree.classList.add('contact-button');

        itemOne.classList.add('selected');

        contentDiv.appendChild(header);
    }

    function _renderBody() {
        const main = document.createElement('main');
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
}