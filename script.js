let ul = document.querySelector(".list-group")


// grapping the number

const numForm = document.forms['submit_form'];

numForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = numForm.querySelector('input[type="number"]').value;

    // working with the value

    var myArr = String(value).split("").map((value) => {
        return Number(value)
    })
    let result = 0;

    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] == 1) {
            result = result + Math.pow(2, i);
        }
    }

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