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

    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
});

invitedList.addEventListener('change', (e) => {
    const checkbox = e.target; //get checked in checkbox inside ul
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode; //to effect the class on li when checked

    if(checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }



});
