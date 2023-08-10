
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

// let Hello = document.getElementById("hello")
// console.log(hello.innerText)

// Hello.innerText = "Hello my name is Fahad khan"

// let mypara = document.getElementsByClassName("domc");
// console.log(mypara[0].innerText)
// mypara[0].innerText = "new para";

// let divi = document.getElementById("set").getAttribute("style");
// console.loga(divi);
// divi.style = "border : 2px solid black"

//? learn set attribute by yourself

// document .getElementById("newbts").onclick = clicks;
// h1 = document.getElementsByTagName("domp");

// function clicks(){
//     console.log("i am clicked");
//     h1.innerText = "kuchbhi"
// }


//! ***********************************query selectors
//An element interface method that emnable us to search 

// // returns all
                                  
var divs = document.getElementById("chngsize");
divs.addEventListener("mouseover",changes)

function changes(){
  divs.style = "height: 100px;width:100px;background-color : red";
}

let inner = document.getElementById("inner")
let outer = document.getElementById("outer")
                    
inner.addEventListener("click",()=>{
    alert("i am Inner");
},true)
                        
outer.addEventListener("click",()=>{
    alert("i am Outer");
},true)
                               

function fh1(){
    h1.classList.toggle("xyz");
    console.log("njfnv");
}