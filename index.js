// var a = 2;
// var b = 4;

// console.log(a+b);
// var x = '';
// for(var i = 0;i<5;i++){
//    for(var j = 0;j<=i;j++){
//      x = x+'*'
//    }
//    x = x+'\n'
// }
// console.log(x);

// var m = '';
// for(var i = 0;i<=5;i++){
//     for(let j = 5-i;j>0;j--){
//        m = m + ' '
//     }
//       for(let k = 0;k<i;k++){
//         m = m+'*';
//       }
//       if(i!=1){ 
//       for(let l = 0;l<i-1;l++){
//          m = m+'*';
//       }
//     }
//       m= m + '\n';
// }

// console.log(m);


//  var Objectn = {
//    vfirstname : "Fahad",
//     lastname : "Khan",
//     age : 20,
//     college : "Lnct "
//  }

//  let h = 5 ;
//  h = 8;
//  console.log(h);

// var can be redeclared 
// let cannot be redeclared it can be reassigned 
// const cannot be redeclared as well as reassigned



// let a
// console.log(a);
// a = 5




//Hoisting
// greet();
// function greet(){
//   console.log("Hi,there.");
// }

// if the function is called before description of the signal it will be called because of the hoisting nature of javascript



// let mystring = "my name is \'Fahad Khan\'";
// console.log('my Strings');

// var count

// var n = document.getElementById("hello");
// n.onclick(alert("hello world"));


//************************coercion */

// string + number = string (concatenation occurs);

//**************************for power we use** */
// 10**4

//*****************************template literals */

// let firstname = "John";
// let lastname = "doe";

// let text = `Welcome ${firstname}, ${lastname}!`
// console.log(text);

// var p = 42
// var r = 32 
// var t = 48;

// var si = (p*r*t)/100;
// console.log(si);

// let student1 = 450;
// let student2 = 451;
// let student3 = 452;
// let student4= 453;
// let student5 = 454;

// let total = student1+student2+student3+student4+student5;
// let avg = total/5;
// let percent = (total/2500)*100;

// console.log(`the total is ${total}`);
// console.log(`the percent is ${percent}`);
// console.log(`the avg is ${avg}`);

// var sw = 4;
// var sm = 5
// console.log(`${sw} ${sm}`);

// var temp;
// temp = sw;
// sw = sm;
// sm = temp;
// console.log(`${sw} ${sm}`);


//parseInt = +

// var input = +(prompt("enter no"));
//  console.log(typeof input);

//  var p = +(prompt("enter no"));
//  var r = +(prompt("enter no"));
//  var t = +(prompt("enter no"));

//  var sip = (p*r*t)/100;
//  console.log(`the simple interest is ${sip}`);

//************************valid triangle************************ */

//  var p = (prompt("enter first side"));
//  var q = (prompt("enter second side"));
//  var r = (prompt("enter third side"));

//  if((p+q > r) && (p+r >q) && (q+r >p))  {
//      console.log("valid triangle");
//  } 
// //  else if ((p+r) >q){
// //   console.log("valid triangle");
// //  }
// //  else if ((p+r) >q){
// //   console.log("valid triangle");
// //  }
//  else{
//   console.log("invalid triangle")
//  }

// to know whether a shopkeeper had profit or less on his sales


// var sp = (prompt("enter selling price"));
// var cp = (prompt("enter cost price"));

// if(sp>cp){
//   console.log("profit is",sp-cp);

// }

// else{
//   console.log("loss is",cp -sp);
// }



//enter marks and find grade


// var marks = (prompt("enter marks"));

// if(marks>100){
//   console.log("Invalid Marks");
// }

// else if(marks>90){
//   console.log("A");
// }

// else if(marks>70){
//   console.log("B");
// }

// else if(marks>50){
//   console.log("C");
// }

// else {
//   console.log("D");
// 


//****************************************number of digits */


// var num = (prompt("enter number"));
// console.log(num.length);
// if(num>99){
//   console.log("three digits");
// }
// else if(num>10){
//   console.log("two digits");
// }
// else if(num<10){
//   console.log("one digit");
// }

//**********************************Program to enter valid mobile number */

// var num = (prompt("enter number"));
//  if(num.length>0){
//      if(num.length ==12){
//          console.log("valid number");
//      }
//      else{
//           console.log("invalid number");
//      }
//  }
//  else{
//   console.log("field is empty")
//  }

// input no to check no is even and give its power and no>100

//  var num = prompt("enter number");
//  if(num%2==0){

//     if(num**num>100){
//       console.log("your number is valid");
//     }
//     else{
//       console.log("number is invalid")
//     }
//  }
//  else{
//   console.log("number is not even");
//  }

//                 Switch Statements

// let day = +prompt("Enter no");

// switch(day){
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//     default : 
//     day = "Sunday";
//     break;

// }
// console.log(day);


//
//  let operator = prompt("enter operator");
//  let operand1 = +prompt("enter first operand");
//  let operand2 = +prompt("enter Second operand");
//  let ans = 0;

//    switch(operator){
//     case "+": 
//     ans = operand1 + operand2;
//     break;
//     case "*": 
//     ans = operand1 * operand2;
//     break;
//     case "/": 
//     ans = operand1 / operand2;
//     break;
//     case "-": 
//     ans = operand1 - operand2;
//     break;
//    }
//    console.log(`${operand1} ${operator} ${operand2} = ${ans}`)

// let o = +prompt("enter no");
// let k = 1;
// while(k<=10){
//   var ans = o*k;
//   console.log(`${o} x ${i} = ${ans}`);
//   k++;
// }

// let sum = 0;
// let w = 1;
// while(w <= 10){
//    sum += i;
//    w++;
// }
// console.log(sum);

// var inp = +prompt("enter no");
// var cnt = 0;
// var sume = 0;
// while(cnt<=inp){
//    if(cnt%2==0){
//     sume = sume+cnt;
//    }
//   cnt++;
// }
// var inp = +prompt("enter no");
//  var fact = 1;
// while(inp>=1){
//  fact = fact *inp;
//  inp--;
// }
// console.log(fact);

// var inp = +prompt("enter no");
// var ans = toString(inp);
// console.log(ans.length);

// var ans;
// sum = 0;
// while(ans!=0){
//   ans = +prompt("enter no");
//   sum = sum + ans;
//   console.log(sum);
// }

// //!regular functions
// function hello(){
//   console.log("hello");
// }

// //! first class fuctions
// let num = function(){
//   console.log("hello world");
// }

// num();

//*********************arrow Functions *\

// let arrow = () =>{
//   console.low("arrow function");
// }
// arrow();


// let name = prompt("enter your name");
// names(name);
// function names(name){
//   console.log(`my name is ${name}`)
// }

// let num1 = +(prompt("enter 1st number"));
// let num2 = +(prompt("enter 2nd number"));


// let ans = (num1,num2) =>{
//     console.log(num1 +num2);
// }
// ans(num1,num2);



// let num1 = +(prompt("enter 1st number"));
// let num2 = +(prompt("enter 2nd number"));

// function whichisgreat(num1,num2){
//   if(num1>num2){
//     console.log(`${num1} is greater`);
//   }
//   else if(num1<num2){
//     console.log(`${num2} is greater`);
//   }
//   else{
//     console.log('both are greater');
//   }

// }
// whichisgreat(num1,num2);


// let num1 = prompt("enter number");
// function lengthq(num1){
//   console.log(num1.length);
// }

// lengthq(num1);


const sub = (num1, num2) => num1 + num2;

//*********************************string methods*************************** */


//! slice method takes 2 parameters " start position and end postion"

// let text1 = "Apple,Banana,Kiwi";
// let part =  text.slice(7,13);
// console.log(part);

//! the replace() method replace"s  a specified value with another value;
// let text2 = "Please visit microsoft";
// let newtext = text.replace("microsoft","Oracle");
// console.log(newtext);



// //! for ignoring case senstivity
// let text2 = "Please visit microsoft and Microsoft";
// let newtext = text.replace(/Microsoft/i,"Oracle");
// console.log(newtext);

//! for changing it multiple times
// let text2 = "Please visit microsoft and Microsoft";
// let newtext = text.replace(/Microsoft/g,"Oracle"); // or use text.replaceAll(but it will be case sensitive)
// console.log(newtext);


//? most important methods
//!touppercase
//!trim
//!concat
//!indexof  == position of first occurrence

// let textn = "Hello";
// let texts = "World";
// let text3 = textn.concat(" -",texts,textn);
// console.log(text3);

//!lastindexof == position of last occurence 

//* both index of and last index of return -1 if the text is not found

//?The search method searches  a string for a string (or a regular expression) and returns the position of the match
let texto = "please locate where 'locate' occurs";
console.log(texto.search("locate"));

//* The match() method return an array containing the results of matching a string against a string

let textm = "The rain in Spain stays  mainly in the plain"

console.log(textm.match(/ain/));

//*The includes() method return true if a string contains a specified value

//Otherwise it returns false;
//includes() is case sensitive;


//****************************************ARRAYS*************************************** */

let array2 = ["rohan", "raman", "meet", "saman", 5, 6];
console.log(array2);

//you access an array element by referring to the index number
console.log(array2[1]);

array2[0] = "rahim";
array2[9] = "sam"//empty
console.log(array2);

//method to string

let array3 = ["rohan", "raman", "meet", "saman"];
console.log(array3.toString());



//! forof *********************************************************************
//! ***********************************very important**************************

// for(let i of array4){
//   console.log(i);
// }


//! forin---------------------------------------------------------------------------
//!-----------------------------------------very important

//  var arr = [10,20,30,-40,50,60];
//  var sum = 0;
//  for(var i of arr){
//   if(i>0){
//     console.log(i);
//   }
//   sum += i;
//  }
//  console.log(sum);

//write a program to even and odd to store 6 element in an array

//    var arr = [10,20,30,-40,50,60,67];
//    for(var i of arr)
// {
//    if(i%2 == 0){
//      console.log(`${i} the number is even`);

//    }
//    else{
//     console.log(`${i} the number is odd`);
//    }
// }  

let fruits = ["Banana", "Apple", "Orange", "Mango"];
fruits.pop();     //! remove an element in array
fruits.push("grapes") //! enter an element from the last
fruits.shift() //! remove an element from the first;
fruits.unshift("Custard Apple") //! enter an element from the first


// let girls = ["saman","nancy","rani"];
// let boys = ["sam","ram","hari"]
//? concat join 2 arrays 
// let children = girls.concat(boys);
// console.log(children);

const sabji = ["Aaloo", "Gobi", "matar", "tamaatar"];
sabji.splice(2, 0, "karela", "bhindi");
//! The first parameter(2) defines the position where new elements should be added
//* the second paramater(0) defiens how many elements should be removed.
//* the rest of parametrs "karela" and "bhindi" defines the new element to be inserted
//? the splice method deletes an array with the deleted items

//The slice method slices the piece of array into a new array
// the slice() method creates a new array.
// this example slice out a part of an array starting from array
const cars = ["alto", "Santro", "800", "swift"];
const carsm = cars.slice(2);
const carsl = carsm.slice(1, 3);
console.log(carsm);

//sorting for alphabetical orders
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.sort();
console.log(fruitss);

//!Sorting in ascending Order

let arrc = [1, 65, 8, 96, 6];
let sortedc = arrc.sort((a, b) => a - b);
console.log(sortedc);

//!Sorting in descending Order

// let arr = [1,65,8,96,6];
//  let sorted = arr.sort((a,b)=>a - b);
//  console.log(sorted);

// Array iteration methods operate onn every array item

//The forEach() mehod calls a function (a callback function) or 

//  var arrays = [1,5,6,3];
//  arrays.forEach((element,index,copy)=>{
//   console.log(element);
//  });

//  var newarr = arrays.map((element)=>{
//   return element*2;
//  })

//!difference between map and foreach is that foreach doesn't return anything in the array, it make changes in the array;
//!while in map it returns a new array with the changed element;
//? The forEach() method returns "undefined".


//**********************************************************find function **********************/
var array = [1, 5, 6, 8]
var elements = array.find((element, i) => {
  if (element == 6) {
    return element;  // return only the first occurence
  }
})
console.log(elements);
//! it does not return any array


//  //***************************************** array.filter***************************************

//  var newarray = [2,3,4,6,54];
//  const newarray = array.filter((element)=>{
//   if(element!=4){
//     return element; // ? We can filter the element through index also example
//   }
//   // if(index!=4){    
//   //   return element;
//   // }
//  })
//  console.log(newarray);

//  let a = [1,2,3,4,4,5]
//  let aa = a.filter((element,index) => {
//   if(index!=4){
//     return element;
//   }
//  })
//  console.log(aa);

// array join removes array prints normal**********************************************
//  var arrayl = [2,344,4,6,53]
//  console.log(arrayl.join());

//  var fruitsm =  ["apple","mango","cherry"];
//  let search = fruits.includes("apple");
//  console.log(search);


// !string to array***************************
// var names = "India is great country";
// console.log(names.split(" "));



//!reverse elements in an array

//  var nament = "Fahad";
//  console.log(nament.reverse());


//?check wether the string in palindrome or not
var names = "mam";
var ansm = names.split("");
console.log(ansm);
console.log(ansm.reverse())
if (ansm.join() == ansm.reverse().join()) {
  console.log("Palindrome");
}

//! The flat() method creates new array with sub-array elements concatnated to a specific depth;

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr); //!convert a 2d array into 1d array

// The every()method check if all array values pass a test
//example
// const numbers = [45,4,9,16,25];
// let newArrayn = numbers.every((value,index) => value>18);
// console.log(newArrayn); // it will return false;

// numbers.indexOf(4);
// numbers.lastIndexOfindexOf(4);

//bubble sort
// let h = [100,600,2,21,500];

// for(var i = 0;i<h.length;i++){
//   for(j=0;j<h.length-i+1;j++){ 
//         if(h[j]>h[j+1]){
//           var temp = h[j];
//           h[j] = h[j+1];
//           h[j+1] = temp;
//         }
//       }

// }
// console.log(h);

//Selection sort

// var arr1 = [100,400,2,20,500];
// var temp = 0;
// for(var i = 0;i<arr1.length-1;j++){
//   for(var j = i+1;j<=arr1.length;j++){
//     if(arr1[i]>arr1[j]){
//       temp = arr1[i];
//       arr1[j] = arr1[j];
//       arr1[j] = temp;
//     }
//   }
// }

// print the smallest and the largest number in array ;
//  console.log(h[0]);
//  console.log(h[h.length-1]);
// console.log(h[h.length-2]);


// let d = [800,650,23,21,500];

// for(var i = 0;i<h.length;i++){
//   for(j=0;j<h.length-i+1;j++){ 
//         if(d[j]<d[j+1]){
//           var temp = h[j];
//           d[j] = d[j+1];
//           d[j+1] = temp;
//         }
//       }

// }
// console.log(d);


// var arr9 = [1,4,2,1,2,3,2,5,6,6];
// var max = -99999;
//  for(var i = 0;i<arr9.length;i++){

//  }
let h = [100, 600, 2, 21, 500];
for (var i = 0; i < h.length; i++) {
  for (j = 0; j < h.length - i + 1; j++) {
    if (h[j] > h[j + 1]) {
      var temp = h[j];
      h[j] = h[j + 1];
      h[j + 1] = temp;
    }
  }

}
var arrAns = []
for (var i = 0; i < h.length; i++) {
  var j = i;
  var count = 0;
  while (h[i] == h[j]) {
    count++;
    j++;
  }
  if (count > 0) {
    arrAns.push[h[i]]
  }
  i = j - 1;
}
console.log(arrAns);


//************************************Unique Charachters */

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

// another approach
function removeDuplicates(arr, n) {
  // Return, if array is empty
  // or contains a single element
  if (n == 0 || n == 1)
    return n;

  var temp = new Array(n);

  // Start traversing elements
  var j = 0;
  for (var i = 0; i < n - 1; i++)

    // If current element is not equal
    // to next element then store that
    // current element
    if (arr[i] != arr[i + 1])
      temp[j++] = arr[i];

  // Store the last element as whether
  // it is unique or repeated, it hasn't
  // stored previously
  temp[j++] = arr[n - 1];

  // Modify original array
  for (var i = 0; i < j; i++)
    arr[i] = temp[i];

  return j;
}

var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];


// //JavaScript Objects
// //JavaScript objects are containers for named values, called properties and methods.
// // A javaScript object is an entity having state and behavior (properties and method).
// //For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// // JavaScript is an object-based language. Everything is an object in JavaScript.

// // JavaScript is template based not class based. Here, we don't create class to get the object.
// // But, we direct create objects.


// // Creating Objects in JavaScript
// // There are 3 ways to create objects.

// // By object literal
// // By creating instance of Object directly (using new keyword)
// // By using an object constructor (using new keyword)

// //how to write objects*************************

// //  let students={
// //     firstName:"seema",
// //     lastName:"khan",
// //     rollNo:1
// //  }

// //    console.log(students)

// //  console.log(students.firstName,students.lastName,students.rollNo)


// // //  // //to display records in loops****************************for only valuues
// // for ( let i in students){
// //     console.log(students[i]);
// // }



// let user = {
//     uname:"saman",
//     age:18,
//     gender:"female",
//     display:function(){
// !          console.log( `my name is ${user.uname} my age is ${user.age}`) // this syntax will not work because of this keyword

//         }
// }
//  console.log(user);

//  console.log(user.age);
//  user.display();


// // What is this?
// // In JavaScript, the this keyword refers to an object.

// // Which object depends on how this is being invoked (used or called).

// // The this keyword refers to different objects depending on how it is used:

// // In an object method, this refers to the object.
// // Alone, this refers to the global object.
// // In a function, this refers to the global object.


// // dont use arrow function
// let user = {
//     uname:"saman",
//     age:18,
//     gender:"female",
//     display:function(){
//          console.log( `my name is ${this.uname} my age is ${this.age}`)
//         }
// }
// console.log(user);

// console.log(user.age);
// user.display();




// let car ={
//     color:"red",
//     sitting :6,
//     powerWindow:true,
//     action:function(){
//         return this.sitting *2
//     }
// }
// console.log(car.action());
// // Adding New Properties
// // You can add new properties to an existing object by simply giving it a value.

// // Assume that the person object already exists - you can then give it new properties:


// let human ={
//     fname:"ram",
//     age:5,
// }
// console.log(human);
// human.natinality="indian"
// console.log(human);


// //  human.nationality="indian"

// //  console.log(human)



//  //The delete keyword deletes a property from an object:
//  delete human.fname
//  console.log(human)











// // spread operartor
// //       ...




// let students ={
//     fName:"rehan",
//     sName:"khan",
//     class:1
// }


//  let latestStuds={...students};
//  console.log(latestStuds)


//    latestStuds.sName="sheikh"
//   console.log(latestStuds)
//  console.log(students)




//! /object destructuring very important


// let person ={
//     fname:"John",
//     age:25,
//     country:"india"
// }

//  console.log(person.fname, person.age)

//  let {fname,country,age } = person
//  console.log(fname, age )

// console.log(this)

//working with multiple objects**********************************
// let classmattes = [
//   {
//       fname: "arshi",
//       class: 10,

//   },
//   {
//       fname: "gul",
//       class: 11,

//   },
//   {
//       fname: "heeba",
//       class: 12,
//   },
//   {
//       fname: "rahim",
//       class: 13,
//   }
//   ,
//   {
//       fname: "gul",
//       class: 11,

//   }
// ]



// classmattes.forEach((element)=>{
//   console.log(element)
// })



// //transformation in aaray*****************************
// var newClass = classmattes.map((element)=>{
//   return element.fname +"Miss"
// })

// console.log(newClass)



//find function******************************
// var news=classmattes.find((element)=>{
//   if (element.fname=="heeba"){
//       return element
//   }
// })

// console.log(news)





//delete function*****************************
// var filteredArray= classmattes.filter((element)=>{
//   if (element.fname !="gul"){
//       return element
//   }
// })
// console.log(filteredArray)


// var ans = [ 
//   {
//     name : "Fahad Khan",
//     class : "10th",
//     Hindi : 98,
//     English : 95,
//     Maths : 100,
//     Total : null
//   },
//   {
//     name : "Arham",
//     class : "10th",
//     Hindi : 96,
//     English : 95,
//     Maths : 99,
//     Total : null
//   },
//   {
//     name : "Umar",
//     class : "10th",
//     Hindi : 93,
//     English : 94,
//     Maths : 91,
//     Total : null
//   },
//   {
//     name : "Faraz",
//     class : "10th",
//     Hindi : 98,
//     English : 97,
//     Maths : 93,
//     Total : null
//   },
//   {
//     name : "Zoya",
//     class : "10th",
//     Hindi : 94,
//     English : 93,
//     Maths : 92,
//     Total : null
//   }
// ]

// for(var i of ans){
//    i.Total = i.English+i.Hindi+i.Maths;
//    console.log(`The Total marks of ${i.name} is ${i.Total}`);
// }

//  let sorted = ans.sort((a,b)=>b.Total - a.Total);
//  console.log(sorted);

//  // add function ***************************************
//  const obj = {
//   name : "Tony Stark",
//     class : "10th",
//     Hindi : 94,
//     English : 93,
//     Maths : 92,
//     Total : null
//  }
//  ans.push(obj);

//  for(var k = 0;k<3;k++){
//    console.log(`the ${k+1}st topper is ${ans[k].name}`);
//  }



//*******************************************************new Array************************************************** */

// var library = [
//   {
//     author : "Bill Gates",
//     title : "The Road Ahead",
//     readingStatus : true
//   },
//   {
//     author : "Steve Jobs",
//     title : "Walter Isaacson",
//     readingStatus : true
//   },
//   {
//     author : "Mockingjay : The final book of the hunger Game",
//     title : "Suzanne Collins",
//     readingStatus : false
//   }
// ]


// for(var i of library){
//    if(i.readingStatus == true){ 
//    console.log(`The Book ${i.title} of the author ${i.author} has been read`);
//    }
//    else{
//     console.log(`The Book ${i.title} of the author ${i.author} has not been read`);
//    }
// }

// //**************************************2 another methods for creating an Object*************************************** */

// //**********************************first instance method********************************************** */
// //*****************************By creating instance of object directly (using new keyword) */

// var emp = new Object();
// emp.id = 101;
// emp.name = "Ravi Malik";
// emp.salary = 50000;
// console.log(emp.id+" "+emp.name+emp.salary);
// console.log(emp);


// //********************************************Using constructor method************************************************************************ *
// function Fruits(names,tastes,seeds){
//   this.namee = names;
//   this.taste = tastes;
//   this.seeds = seeds;
//   this.texture = function(){
//     console.log(this.taste,"is Sour")
//   }
// }
// const fruit1 = new Fruits('Yellow','Sweet',1);
// fruit1.texture();


// //? //***************************************************new Method get date */

// var date = new Date();
// console.log(date.getDate());

//? in javascript(OOPS) is little different 
//* because it works on client side
//! it contains prototype inheritance
//* it uses prototype class
//* which include function like map, sort,push


// class Forms{
//   submit(){
//     alert(this.name+" submitted! the form");
//   }
//   cancel(){
//     alert(this.name+" cancelled! for train no" + this.trainNo)
//   }

//   fillForm(namee,train){
//     this.name = namee
//     this.trainNo = train
//   }

// }
// let ram = new Forms
// ram.fillForm("ram",120223);
// ram.submit();
// ram.cancel();

// class Forms{
//     constructor(namee,train){
//     this.name = namee
//     this.trainNo = train
//   }
//   submit(){
//     alert(this.name+" submitted! the form");
//   }
//   cancel(){
//     alert(this.name+" cancelled! for train no" + this.trainNo)
//   }

// }

// let rams = new Forms("ram",135656);
// ram.submit();
// ram.cancel();

// //!inheritance is same as java with same syntax


// class students{
//   constructor(namek,age){
//     this.namek = namek;
//     this.age = age;
//   }
//   myself(){
//     console.log(`hi i m ${this.namek} and i am ${this.age} years old`)
//   }
// }

// class NewStudent extends students{
//   player(){
//     console.log(`hi i m a player named ${this.namek} and i am ${this.age} years old`)
//   }
// }
// let saman = new NewStudent("samans",25);

//! *************************************************Method overriding

//?  javascript does support overiding instead of overloading 
//? defining multiple functions with same is referred to function overriding
//? when multiple functions are overrridden the javascript compiler calls the last one
// ? while calling the function this is because javascript is an interpreted language 
//? In inheritance , the same named child class method over


// class studentsm{
//   constructor(namek,age){
//     this.namek = namek;
//     this.age = age;
//   }
//   myself(){
//     console.log(`hi i m ${this.namek} and i am ${this.age} years old`)
//   }
// }

// class NewStudentm extends studentsm{
//   myself(){
//     console.log(`hi i m a player named ${this.namek} and i am ${this.age} years old`) //! object overriding will happen here
//   }
// }
// let samank = new NewStudentm("samans",25);
// samank.myself();

//! ****************************************Super Keyword******************************************************

// the super keyword is used in a subclass to access a method or property defined in its parent class



// class studentsm {
//   constructor(namek, age) {
//     this.namek = namek;
//     this.age = age;

//   }
//   myself(nationality) {
//     console.log(`hi i m ${this.namek} and i am ${this.age} years old and i am ${nationality}`)
//   }
// }

// class NewStudentm extends studentsm {
//   myself(nationality) {
//     super.myself("japanese");
//     console.log("above is the use of super keyword");
//     console.log(`hi i m a player named ${this.namek} and i am ${this.age} years old and my nationality is ${nationality}`) //! object overriding will happen here
//   }
// }
// let samank = new NewStudentm("samans", 25);
// samank.myself("Indian");


//!  Static method********************************************************************
//* which remains same for each object of class 
//* this means that the function is called by class name and not after instantiating object and calling through it

// class Example {
//   static myStaticProperty = 'Hello,world!';
//   static myStaticMethod() {
//     console.log('This is a static method');
//   }
//   myfunction() {
//     console.log("this is my function");
//   }
// }

// let m = new Example;
// m.myfunction();
// Example.myStaticMethod();
// console.log(Example.myStaticMethod);

//! note by # we can keep method and properties of a class as private we can set it by using setter and getters
// class Counter {
//   //this is a private property
//   #count = 0;

//   increment() {
//     //only methods of this class can access this member
//     this.#count++;
//   }
//   // we need a public method to get the value of the private
//   getCount() {
//     return this.#count;
//   }
// }

// let counter = new Counter();
// counter.increment();

// console.log(counter.getCount());
//Output : 2

//console.log(counter.#count);//not allowed
//? note protected member is declared with underscore_
//! program to know how old is a person through class;

class Age {
  constructor(name, DOB) {
    this.name = name;
    this.DOB = DOB;
  }
  calculate_age() {
    const d = new Date();
    let year = d.getFullYear();
    return year - this.DOB;
  }
}

var names = "current_name";

let age_ans = new Age(names, 1980);
console.log(age_ans.calculate_age());

//! *************************************** different consoles***************************************** */

console.warn("this is warning");
console.error("this is error");
console.info("this is information");


//?-----------------------------------------Reduce method------------------------
let arr_reduce = [2, 5, 6, 5, 8];
let ne = arr.reduce((a, b) => {
  return a + b;
})

console.log(ne);
//! *******************************************Math.random
// let b
// let a = Math.random()*100

//console.log(a);


//!local storage is very very important*********************************************************************

// let key = prompt("Enter key");
// let value = prompt("Enter value");

// //store key value pairt
// localStorage.setItem(key,value)

// //get value through key name
// console.log(localStorage.getItem(key,value));

// //for clearing it we will use
// localStorage.clear();

// Creating Object
// this object will be saved to local host
// const objectRegion = {
//   Region : "Asia",
//   Country : "India"
// }

// // defining key and value
// const key = "Myobject";
// const value = JSON.stringify(objectRegion)

// //setting the key-value pair to localhost
// window.localStorage.setItem(key,value);

//  //Getting the key-value pair to localhost using the getItem() method with the key attribute
//  //getItem() mehtod is used to get the value from localStorage using key
// let object = window.localStorage.getItem(Key);
// console.log(object);

// let n = JSON.parse(object);
// console.log(n);
// console.log(window);


//! ******************************************reduce method****************************************************

// let arrn = [1,5,6,8]
// let narr = arrn.reduce((a,b)=>{
//   return a+b
// });
// //? reduce method iterates throught the whole array

//! import and exports in javascript **************************************************************************
//? first we have to declare script type as module in index.js file
//? then we have to export the file from where we have to export and we can import from where we can import

import { aa, obj } from "./index2.js";
console.log(aa, obj);

//! =======================================Session storage=====================================================


//Use the window.sessionStorage property of the window object to gain access
//to the sessionStorage.
// The sessionStorage object let you store key/value pairs in the browser.

// Note
// The sessionStorage object stores data for only one session.

// (The data is deleted when the browser is closed).



// // Save data to sessionStorage
sessionStorage.setItem("keyssssssssssss", "valuessssssssssss");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");



// // Remove all saved data from sessionStorage
sessionStorage.clear();


// let key= "name";
// let value= " raman"
//  sessionStorage.setItem(key,value);


//  let data = sessionStorage.getItem(key);
//  console.log(data);

//! ********************************************Synchronous nature of javascript

// console.log("boil egg");
// console.log("toast bread");
// console.log("make tea");

//! ********************************************ASynchronous nature of javascript
//? with asynchronous code , multiple tasks can execute at the same time wile tasks in the background finish.
//? This is what we call non blocking code 
//? the execution of other code won't stop while an asynchrous tasks finishes it swork
// console.log("boil egg");

// setTimeout(()=>{
//   console.log("toast bread");
// },1000);

// console.log("make tea");

//! *************************************************callbacks**************************************************

//? when function are passeda as an arguement to another function it is called as callback function 
//? it depends one function on another functions
//? once the  function is sent  as an arguement to another function the function isn called inside another function



//! Example number 1**********************************************************************************************


// let order = (production_callback) => {
//   console.log("Order placed")
//   production_callback();
// }



// let production = () => {
//   console.log("production started");
// };

// order(production);

//! Example number 2***********************************************************************************************

//? although we used the settimout in the parent function, it will always call the parent function first then it will call the calllback



// let order1 = (production_callback) => {

//   console.log("Order placed");

//   setTimeout(() => { production_callback() }, 2000);
// }



// let production1 = () => {
//   console.log("production started");
// };

// order1(production1);

//! *********************************************Example 3*********************************************

// function add(a, b, callback) {
//   let s = a + b;
//   console.log("total", s);
//   callback(s)
// };

// function final(s) {
//   setTimeout(() => {
//     console.log("the answer is ", s);
//   }, 1000)
// }

// add(2, 2, final);


//! when multiple functions are called inside themselves then it is termed as the callback hell

// let orderc = (call_production) => {
//   console.log("Order place.please call production");
//   call_production();
// };

// let productionc = () => {
//   setTimeout(() => {
//     console.log("Production has started")

//     setTimeout(() => {
//       console.log("dishes being prepared");

//       setTimeout(() => {
//         console.log("food delivered")

//         setTimeout(() => {
//           console.log("bill generated")
//         }, 2000)
//       }, 2000)
//     }, 2000)
//   }, 2000)
// }

// orderc(productionc);


//! question


let squares = (num,power)=>{
  let squareans = num**2;
  setTimeout(()=>{console.log(squareans);},2000)
   power(num);
   return ;
}

let power = (num)=>{
   setTimeout(()=>{console.log(num**num);},3000)
}

let sumn =  (a,b,square,powern) => {
     let number =  a + b;
     console.log (number);
     square(number,powern);
    
}
sumn(4,5,squares,power);