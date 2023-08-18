import MapImg from './map.png';
import PhoneIcon from './phone.svg';
import MapIcon from './map-marker.svg';

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

        //  Phone 
        const phone = document.createElement('div');
        card.appendChild(phone);

        const phoneIcon = document.createElementNS(PhoneIcon, 'svg');
        phone.appendChild(phoneIcon);

        const paraOne = document.createElement('p');
        paraOne.textContent = '07572 893017';
        phone.appendChild(paraOne);

        //  Address 
        const address = document.createElement('div');
        card.appendChild(address);

        const mapIcon = document.createElementNS(MapIcon, 'svg');
        phone.appendChild(mapIcon);

        const paraTwo = document.createElement('p');
        paraTwo.textContent = '123 Sesame Street, Ardrossan, Scotland';
        phone.appendChild(paraTwo);

        //  Map
        const img = document.createElement('img');
        img.src = MapImg;
        card.appendChild(img);

    }

    return {
        render,
    }
}