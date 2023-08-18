export default function menuPage() {
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

        card.classList.add('card', 'menu');
        main.appendChild(card);

        //  Pizza Section
        const pizzaSection = document.createElement('div');
        pizzaSection.classList.add('section', 'pizza');
        card.appendChild(pizzaSection);

        const pizzaSectionHeader = document.createElement('h2');
        pizzaSectionHeader.textContent = 'Pizza';
        pizzaSection.appendChild(pizzaSectionHeader);

        const pizzas = [
            ['Salsiccia', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'],
            ['Gamberi', 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'],
            ['Pepe', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'],
            ['Disgustoso', 'Tomato sauce, Bacon, Pineapple, Olives, Basil'],
            ['Colorato', 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'],
            ['Pomodoro', 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'],
            ['Crema', 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'],
            ['Carne', 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'],
        ]

        pizzas.forEach(pizza => pizzaSection.appendChild(_createPizza(pizza[0], pizza[1])));
    }

    function _createPizza(name, description) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const header = document.createElement('h3');
        header.textContent = name;
        menuItem.appendChild(header);

        const text = document.createElement('p');
        text.textContent = description;
        menuItem.appendChild(text);

        return menuItem;
    }

    return {
        render,
    }
}