let ul = document.querySelector(".list-group")

// grapping the number

const numForm = document.forms['submit_form'];

numForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = numForm.querySelector('input[type="text"]').value;
    let result = parseInt(value, 2);

    const input = document.querySelector('.binary');
    
    // add content
    document.getElementById('decimal').innerHTML = input.value + " => " + result;

    // clear input field
    input.value = '';
    

})