const form = document.getElementById('registrar');
const submit = form.querySelector('input');
const invitedList = document.getElementById('invitedList');
const containerList = invitedList.parentNode;
const li = document.getElementsByTagName('li');

const createLi = (inputName) => {

    const li = document.createElement('li');
    li.innerHTML = `<span> ${inputName} </span>`; //or .innerHTML for with html elements
    // li.textContent = inputName;

    //add checkbox every input
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    //add edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    li.appendChild(editButton);

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
    if(e.target.tagName == "BUTTON") {
        const button = e.target;
        const li = e.target.parentNode;
        const ul = li.parentNode;
        if(e.target.textContent == 'Remove') {    
            ul.removeChild(li);
        } else if (e.target.textContent == 'Edit') {
            const span = li.firstElementChild;
            const text = span.textContent;
            const input = document.createElement('INPUT');
            input.type = "text";
            input.value = text;
            li.insertBefore(input,span); //remove span on its original place
            li.removeChild(span); //so we cant see the span anymore
            button.textContent = 'Save';
        } else if (e.target.textContent == 'Save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span,input);
            li.removeChild(input);

            button.textContent = 'Edit';
        }

    }
});