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


const sub = (num1,num2) => num1+num2;

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

let array2 = ["rohan","raman","meet","saman",5,6];
console.log(array2);

//you access an array element by referring to the index number
console.log(array2[1]);

array2[0] = "rahim";
array2[9] = "sam"//empty
console.log(array2);

//method to string

let array3 = ["rohan","raman","meet","saman"];
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

let fruits = ["Banana","Apple","Orange","Mango"];
fruits.pop();     //! remove an element in array
 fruits.push("grapes") //! enter an element from the last
 fruits.shift() //! remove an element from the first;
 fruits.unshift("Custard Apple") //! enter an element from the first


// let girls = ["saman","nancy","rani"];
// let boys = ["sam","ram","hari"]
                                //? concat join 2 arrays 
// let children = girls.concat(boys);
// console.log(children);

 const sabji = ["Aaloo","Gobi","matar","tamaatar"];
 sabji.splice(2,0,"karela","bhindi");
//! The first parameter(2) defines the position where new elements should be added
//* the second paramater(0) defiens how many elements should be removed.
//* the rest of parametrs "karela" and "bhindi" defines the new element to be inserted
//? the splice method deletes an array with the deleted items

//The slice method slices the piece of array into a new array
// the slice() method creates a new array.
// this example slice out a part of an array starting from array
const cars = ["alto","Santro","800","swift"];
const carsm = cars.slice(2);
const carsl = carsm.slice(1,3);
console.log(carsm);

//sorting for alphabetical orders
const fruitss = ["Banana","Orange","Apple","Mango"];
fruitss .sort();
console.log(fruitss);

//!Sorting in ascending Order

let arrc = [1,65,8,96,6];
 let sortedc = arr.sort((a,b)=>a - b);
 console.log(sortedc);

//!Sorting in descending Order

let arr = [1,65,8,96,6];
 let sorted = arr.sort((a,b)=>a - b);
 console.log(sorted);

 // Array iteration methods operate onn every array item

 //The forEach() mehod calls a function (a callback function) or 

 var arrays = [1,5,6,3];
 arrays.forEach((element,index,copy)=>{
  console.log(element);
 });

 var newarr = arrays.map((element)=>{
  return element*2;
 })

 //!difference between map and foreach is that foreach doesn't return anything in the array, it make changes in the array;
//!while in map it returns a new array with the change element;
