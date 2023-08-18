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

        card.classList.add('card', 'contact');
        main.appendChild(card);

        //  Phone 
        const phone = document.createElement('div');
        card.appendChild(phone);

        const phoneIcon = document.createElement('div');
        phoneIcon.classList.add('phone-icon');
        phone.appendChild(phoneIcon);

        const paraOne = document.createElement('p');
        paraOne.textContent = '07572 893017';
        phone.appendChild(paraOne);

        //  Address 
        const address = document.createElement('div');
        card.appendChild(address);

        const mapIcon = document.createElement('div');
        mapIcon.classList.add('map-icon');
        address.appendChild(mapIcon);

        const paraTwo = document.createElement('p');
        paraTwo.textContent = '123 Sesame Street, Ardrossan, Scotland';
        address.appendChild(paraTwo);

        //  Map
        const img = document.createElement('img');
        img.src = MapImg;
        card.appendChild(img);

    }

    return {
        render,
    }
}