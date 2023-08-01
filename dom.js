
//? *******************************************dom********************************************************

console.log(document.images[0].src)

document.body.style.backgroundColor = "Cyan"

//nodes element node text node

//element = document.all;

//element = document .head;

//element = document.title;

//element = document.body;

//element = document.links;

//element = document .images

//element = document.links[0];


//Finding HTML Elements 
//Method Description 
//document.getElementById(id) Find an element by id;
// document.getElementsByClassName() Find an element by classname;
//  document.getElementsByTagName() Find an element by tag;

let Hello = document.getElementById("hello")
console.log(hello.innerText)

Hello.innerText = "Hello my name is Fahad khan"