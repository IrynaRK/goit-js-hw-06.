const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

spanRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
