import MapImg from './map.png';

export default function contactPage() {
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

        const phone = document.createElement('div');
        card.appendChild(phone);

        const paraOne = document.createElement('p');
        paraOne.textContent = '07572 893017';
        phone.appendChild(paraOne);

        const address = document.createElement('div');
        card.appendChild(address);

        const paraTwo = document.createElement('p');
        paraTwo.textContent = '123 Sesame Street, Ardrossan, Scotland';
        phone.appendChild(paraTwo);

        const img = document.createElement('img');
        img.src = MapImg;
        card.appendChild(img);

    }

    return {
        render,
    }
}