let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('userinput').value;
    let count = word.length;
    let outputDiv = document.getElementById('result');

    outputDiv.innerHTML = `The Word Length for Given Word is : ${count}`
});