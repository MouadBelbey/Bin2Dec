
const container = document.querySelector(".span_div");

// grapping the number

const numForm = document.forms['submit_form'];

numForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = numForm.querySelector('input[type="number"]').value;
    console.log(value);

    // working with the value

    var myArr = String(value).split("").map((value)=>{
        return Number(value)
      })
       
      console.log(myArr)
      let result = 0;

    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] == 1) {
            result = result + Math.pow(2, i);
        }
    }
    console.log(result);

    // create elements
    const resultNumber = document.createElement('span');

    // add content
    resultNumber.textContent = result;

    // append to document
    container.appendChild(resultNumber);


})