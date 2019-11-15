const form = document.getElementById('registrar');
const submit = form.querySelector('input');
const invitedList = document.getElementById('invitedList');
const containerList = invitedList.parentNode;

form.addEventListener('submit', (e) => {
    e.preventDefault(); //to cancel the default action of html form (loads after submit)

    let inputValue = submit.value;
    const li = document.createElement('li');
    li.textContent = inputValue; //or .innerHTML for with html elements

    invitedList.appendChild(li);
    submit.value = '';


});

