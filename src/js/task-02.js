const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const list = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
    const newLi = document.createElement('li');
    newLi.classList.add('item');
    newLi.textContent = `${ingredient}`;
    return newLi;
});

list.append(...elements);
console.log(elements);
