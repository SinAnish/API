/*
ignore this (i thought this was pretty cool)
var i;
for(i = 0; i <=100; i++){
    let header = document.createElement('h1');
header.innerHTML = i;
mainSection.appendChild(header);
}
*/
let randomButton = document.getElementById("randomiser");
let inputThings = document.getElementById("inputstuff")
let output = document.getElementById("section");

randomButton.addEventListener("click", () => {
    output.innerHTML = "";
    let dogPic = inputThings.value;
    dogPic = dogPic.toLowerCase();
    return fetch('https://dog.ceo/api/breed/' + dogPic + '/images')
    .then(res => res.json())
    .then(info =>{
        let sprite = document.createElement('img');
        sprite.src = info.message[Math.floor(Math.random()* info.message.length - 1)];
        output.appendChild(sprite);
    });
});
