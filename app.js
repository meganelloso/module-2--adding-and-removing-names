const form = document.getElementById('registrar');
const submit = form.querySelector('input');
const invitedList = document.getElementById('invitedList');
const containerList = invitedList.parentNode;
const li = document.getElementsByTagName('li');
const mainDiv = document.querySelector('.main');

function createElement(elem) {
    const element = document.createElement(elem);
    return element;
}
const filterCheckbox = createElement('div');
const label = createElement('label');
const inputCheckbox = createElement('input');
inputCheckbox.type = 'checkbox';

label.textContent = "Filter for those who responded";
filterCheckbox.appendChild(label);
filterCheckbox.appendChild(inputCheckbox);
mainDiv.insertBefore(filterCheckbox,invitedList);

mainDiv.addEventListener('change', (e) => {
    const isChecked = e.target;
    if(isChecked) {
        const li = invitedList.children; //array
        
        for(let i = 0; i < li.length; i++) {
            if(li.className == "responded"){
                li.style.display = '';
            } else {
                li.style.display = 'none'; //ERROR HERE
            }
        }
    } else {
        for(let i = 0; i < li.length; i++){
            li.style.display = '';
        }
    }
});


const createLi = (inputName) => {

    const li = document.createElement('li');
    li.innerHTML = `<span> ${inputName} </span>`; //or .innerHTML for with html elements
    
    function addElement(elementName, property, value) {
        const element = document.createElement(`${elementName}`);
        element[property] = value;
        return element;
    }

    function appendToLI(elementName, property, value) {
        const element = addElement(elementName, property, value);
        li.appendChild(element);
        return element;
    }

    //add checkbox and label every input
    appendToLI('label','textContent','Confirmed').appendChild(addElement('input','type','checkbox'));
    //add edit button
    appendToLI('button','textContent','Edit');
    //add remove button every input
    appendToLI('button','textContent','Remove');

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
        const actions = button.textContent;
        const nameActions = {
            Remove: () => {
                ul.removeChild(li);
            },
            Edit: () => {
                const span = li.firstElementChild;
                const text = span.textContent;
                const input = document.createElement('input');
                input.type = "text";
                input.value = text;
                li.insertBefore(input,span); //remove span on its original place
                li.removeChild(span); //so we cant see the span anymore
                button.textContent = 'Save'; 
            },
            Save: () => {
                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span,input);
                li.removeChild(input);
    
                button.textContent = 'Edit';
            }
        };
        nameActions[actions]();
    }
});