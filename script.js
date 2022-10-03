let ul = document.querySelector(".list-group")



// grapping the number

const numForm = document.forms['submit_form'];

numForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = numForm.querySelector('input[type="number"]').value;
    let result = parseInt(value, 2);

    // create elements
    let li = document.createElement('li');
    let resultNumber = document.createElement('span');

    // adding style to the list
    li.className = 'list-group-item';

    // add content
    resultNumber.textContent = result;

    // append to document
    li.appendChild(resultNumber);
    ul.appendChild(li);


})