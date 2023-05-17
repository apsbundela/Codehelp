// let rectangleOne = {
//   length: 3,
//   breadth: 5,
// };

// two ways to access value of object

// 1. rectangleOne.length
// 2. rectangle['length']
// console.log(rectangleOne['length'])

//Factory function :- camelCase

// function createRectangle(len, bre) {
//   return (obj = {
//     length: len,
//     breadth: bre,

//     draw: function () {
//       console.log("draw rectangle of area", obj.length * obj.breadth);
//     },
//   });
// }

// let printRectangle = createRectangle(2, 3);
//  printRectangle.draw();

// Constructor Function :- PascalCase
// function  Rectangle(len,bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }

//object creation using constructor function
// new - new keyword JS k andar ek empty object return krta hai
// let rectangleObject = new Rectangle(2,3);
// console.log(rectangleObject.length);
// console.log(rectangleObject.draw());

// rectangleObject.color = 'red';
// console.log(rectangleObject);

//  delete rectangleObject.color;
// console.log(rectangleObject);

//evry object in JS has constructor property which show how that constructor is made of
// console.log(rectangleObject.constructor);

// function is also an object
// all object have constructor

//for-in loop
// let rectangle = {
//         length:2,
//         breadth:6
// }
// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }

//string - primitive
//let message = "Hello This is ayush";

//String - Object type

// let stringObj = new String('Ayush');
// console.log(typeof stringObj);

//Template Literal
// let message = "This
// is
// ayush"
//will cause an error if we want formating of string in new line but we can dothis
//using backtick ` `

// let message = `this
// is
// ayush
// what about you?
// `

// console.log(message)

// Arrays - Object Type

// let list = [1, 2, 3, 4, "ayush"];
// console.log(typeof list);
// console.log(list.indexOf("ayush")); //searching for primitive values

// let courses = [
//   { no: 1, naam: "DSA" },
//   { no: 2, naam: "Web Dev" },
// ];

// let courseDec =courses.find(function(course){
//   //callback function
//   return course.naam == 'DSA';
// })
// console.log(courseDec)

// let courseDec = courses.find((course) => course.naam == "DSA"); //arrow function
// console.log(courseDec);

//Empting a array

// let listOne = [1,2,3,4,5]
// let listTwo  = listOne;

// listOne = [];
//listOne.length = 0;     // -- Good Way
// console.log(listOne);
// console.log(listTwo);

//Spread operator for combining

// let first = [1,2,3];
// let second = [4,5,6];
// let combined = [...first,'a','b', ...second,22,33]
// console.log(combined)

// let numbers = [1,3,4,5,6]
// const joined = numbers.join('_');
// console.log(joined);

// let numbers = [99, "1", 11, 12, 2, 8, 3, "ayush"];
// console.log(numbers.sort());

// let numbers = [1,2,33,4,333,55,9];
// let sorted = numbers.sort(function(a, b){
//   return a-b});
// console.log()

//filter
// let numbers = [1, 2, -2, -8];
// let result = numbers.filter(number=> number > 0);
// console.log(result);

//map ecah element of array to something else eg- a - '97'

// let numbers = [7, 8, 9, 10];
// let items = numbers.map(function (number) {
//   return "student no" + number;
// });
// console.log(items);

//maping with ibjects

let numbers = [1, 2, -3, -9];

let filtered = numbers.filter((number) => number < 0);

let items = filtered.map(function (num) {
  return { value: num };
});

console.log(items)
