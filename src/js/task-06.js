const inputRef = document.querySelector('#validation-input');
const inputRefLenght = inputRef.getAttribute('data-lenght');
inputRef.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    const isValid = event.currentTarget.value.lenght === Number(inputRefLenght);

    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}
