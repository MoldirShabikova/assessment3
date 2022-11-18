
let randomBtn =document.querySelector('#random')
// let text = document.querySelector('#text')

let arr = ['Asian', 'Cidercade Austin', 'The Melting Pot', 'Roaring Fork','Barley Swine']

function getRandom(){
    let random = Math.floor(Math.random() * arr.length)
    document.getElementById("text").innerHTML += arr[random]
    return random
    

}

randomBtn.addEventListener('click', getRandom)