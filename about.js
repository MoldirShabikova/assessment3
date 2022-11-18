console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#img')


function giveCompliment(){
	alert('Hey, You are wonderful!!!')
}

img.addEventListener('mouseover', giveCompliment)