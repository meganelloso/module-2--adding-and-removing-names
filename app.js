const form = document.getElementById('registrar');
const submit = form.querySelector('input');
const invitedList = document.getElementById('invitedList');
const containerList = invitedList.parentNode;
const li = document.getElementsByTagName('li');

const createLi = (inputName) => {

    const li = document.createElement('li');
    li.textContent = inputName; //or .innerHTML for with html elements

    //add checkbox every input
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    //add remove button every input
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    li.appendChild(removeButton);

    return li;
}
form.addEventListener('submit', (e) => {
    e.preventDefault(); //to cancel the default action of html form (loads after submit)
    const li = createLi(submit.value);

    invitedList.appendChild(li);
    submit.value = '';

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

invitedList.addEventListener('click', (e) => {
    if(e.target.tagName == "BUTTON" && e.target.textContent == 'Remove') {
        const li = e.target.parentNode;
        const ul = li.parentNode;

        ul.removeChild(li);
    }
});