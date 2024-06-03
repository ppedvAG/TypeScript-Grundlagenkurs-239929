export function createLoginForm(parent: HTMLElement) {
    const formElement = document.createElement('form');
    formElement.style.display = 'flex';
    formElement.style.flexDirection = 'column';

    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name';

    const nameInput = document.createElement('input');
    nameInput.value = 'John Doe';

    const passwordLabel = document.createElement('label');
    passwordLabel.innerText = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordLabel.innerText = 'Password';

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.addEventListener('click', () => {
        alert(`Hallo ${nameInput.value}!`);
    });

    formElement.appendChild(nameLabel);
    formElement.appendChild(nameInput);
    formElement.appendChild(passwordLabel);
    formElement.appendChild(passwordInput);
    formElement.appendChild(submitInput);
    parent?.appendChild(formElement);
}
