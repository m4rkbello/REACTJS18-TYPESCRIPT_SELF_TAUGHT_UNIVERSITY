// Importing the functions from modules.js
// import { getData, getValue, padayonLang, padayonReactTypescript } from './ExportSamples';


//FOR HOISTING ###################################################################################################################
// var typescript1 = 'test';
// let typescript2 = 'test';
// const typescript3 = 'test';
// console.log(typescript3);

//GLOBAL SCOPE WITH HOISTING ISSUE!
// typescript();
// function typescript(){
//     console.log("MASTER COURSE!");
// }


//FUNCTION BLOCK SCOPE  ##########################################################################################################
// if(true){
//     var typescript = 'typescript';
//     result is true;
    
//     let typescript = 'typescript';
//     result is Uncaught SyntaxError: Identifier 'typescript' has already been declared (at main.jsx:17:9)

//     const typescript = 'typescript';
//     result is ReferenceError: typescript is not defined at main.jsx:27:13
// }

// console.log(typescript);

//FUNCTION REFACTORY SYNTAX
// for(let ez = 0; ez < 3; ez++){
//     (function test(o){
//         alert(o);
//     })(ez)


//     setTimeout(() => {
//         alert(ez);
//     }, 100 )
// }

//PRIMITIVE TYPES VALUES ###########################################################################################################
// let firstNumber = 100;
// let copyFirstNumber = firstNumber;
// firstNumber = 1000;
// console.log("TEST 1",firstNumber);
// console.log("TEST 2", copyFirstNumber);


//REFERENCE TYPES VALUES
// let firstArray = [1];
// let copyFirstArray = firstArray;
// copyFirstArray.push(2);
// console.log("ARRAY 1", firstArray);
// console.log("ARRAY 2", copyFirstArray);


//PREMITIVE TYPES WITH OBJECTS 
// let personalDetails  = { 
//     firstname: 'mark',
//     lastname: 'bello',
//     age: '25'
// };
// let bioData = personalDetails;
// personalDetails.work = 'tig lung-ag';
// console.log(bioData);


//OBJECTS AND ARRAYS COPYING USING SHALLOW COPY AND DEEP COPY! #############################################################################

// reference type deep copy
// const data = {
//     test: 'test',
//     userDetails: {
//         address: 
//         {    
//             country: 'philippines',
//             state: 'mind the now',
//             region: 'Region XI',
//             province: 'davao de oro',
//             municipality: 'montevista',
//             barangay: 'linoan',
//         }
//     }
// }

// const copy = data;
// data.test = 'PADAYON!';

// console.log("ORIGINAL", data);
// console.log("COPY", copy);

// const data = {
//     test: 'test',
//     userDetails: {
//         address: 
//         {
//             municipality: 'montevista',
//             province: 'davao de oro',
//             country: 'philippines'
//         }
//     }
// }
// //gamit ug Object.assign(()); method
// const copy = Object.assign({}, data);
// ; data.test = 'PADAYON!';

// console.log("COPY", copy);
// console.log("ORIGINAL", data)


//FOR DEEP COPY USING JSON.PARSE(STRINGIFY)
const data = {
    test: 'test',
    userDetails: {
        address: 
        {
            municipality: 'montevista',
            province: 'davao de oro',
            country: 'philippines'
        }
    },
    myFn: () => {},
    undef: undefined,
}
//gamit ug Object.assign(()); method
const copy = JSON.parse(JSON.stringify(data));
data.test = 'PADAYON!';

console.log("COPY", copy);
console.log("ORIGINAL", data);


//SHALLOW COPY AND DEEP COPY IN AN ARRAY 
//SHALLOW COPY USING SLICE
// const orig = ['mark', 'marco', {newProgrammer: 'WAIL'}];
// const copy = orig.slice();
// copy[2].newProgrammer = 'PAUL JORGE';
// copy.push('evan');
// console.log("ORIG", orig);
// console.log('COPY', copy);


//DEEP COPY USING JSON.PARESE(STRINGIFY)
// const orig = ['mark', 'marco', {newProgrammer: 'WAIL'}];
// const copy = JSON.parse(JSON.stringify(orig));
// copy[2].newProgrammer = 'PAUL JORGE';
// copy.push('evan');
// console.log("ORIG", orig);
// console.log('COPY', copy);


//SPREAD OPERATOR - REST PARAMETERS - DESCTRUCTURING

//REST PARAMETERS EXAMPLE 
// function sum(...thisArgs) {
//     return thisArgs.reduce(function(previous, current){
//         return previous + current;
//     })
// }
// console.log(sum(10, 10, 10));

//SPREAD OPERATORS SHALLOW COPY - OBJECTS
// const userDetails = {
//     name: 'Mark Bello',
//     address: 'Davao',
//     work: {
//         test: 'Data'
//     }
// }

// const newUserDetails = { ...userDetails, name: 'BOYBOY'} 
// newUserDetails.work.padayon = 'WORTH IT LAGI NI';
// console.log(userDetails);
// console.log(newUserDetails);


//SPREAD OPERATORS SHALLOW COPY - ARRAYS
// const data = ['MARK', 'BELLO'];
// const newData = [...data, 'PADAYON LANG!'];
// console.log(data);
// console.log(newData);


//DESTRUCTURING SHALLOW COPY 
// const personalData = {
//     name: 'Mark',
//     address: 'Davao',
//     email: 'markbello10041999@gmail.com',
//     work: {
//         frontend: 'FRONTEND WEB DEVELOPER',
//         backend: 'BACKEND WEB DEVELOPER'
//     }
// }

// const {work: {frontend}, ...otherDatas} = personalData;
// console.log("DESTRUCTURING USING OBJECT", frontend);
// console.log("DATA", otherDatas);

//DESCTRUCTURING ARRAYS 
// const infinit = ['Mark', 'Bello', 'Boy2'];

// const [firstInfinit, ...otherInfinit] = infinit;

// console.log("test",firstInfinit);
// console.log("test 2", otherInfinit);


//CLASSES #########################################################################################################
// class Shape {
//     #privateVaribale = 'privateVariable choi!'
//     publicVariable = 'publicVariable ni choi!'
//     static staticVariable = 'staticVariable ni choi!'

//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }

// const myShape = new Shape(500, 600);

// console.log(myShape.height);
// console.log(Shape.staticVariable);


// class Shape {
//     #privateVaribale = 'privateVariable choi!'
//     #privateVariableNi = 'BUNAL!';
//     publicVariable = 'publicVariable ni choi!'
//     static staticVariable = 'staticVariable ni choi!'

//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     getArea(){
//         return 'ATIK ATIK!';
//     }

//     getPrivateData() {
//         return this.#privateVariableNi;
//     }
// }

// class total extends Shape{
//     getArea() {
//         return this.height * this.width;
//     }

//     getSUperArea() {
//         return super.getArea();
//     }
// }

// const myShape = new total(500, 600);

// console.log(myShape.getArea());
// console.log(myShape.getSUperArea());
// console.log(Shape.staticVariable);
// console.log(myShape.getPrivateData());


//THIS OBJECT + ARROW FUNCTION #########################################################################################################

// const userDetails = {
//     name: 'MARK BELLO',
//     getData: function() {
//         return this.name; //gikuha niyang name 
//     }
// }

// console.log("OBJECT + ARROW FUNCTION", userDetails.getData);


// class Person {
//     name = "MARK BELLO";
//     printName() {
//         console.log('MY NAME IS', this.name)
//     }
 
//     printNameArrowFn() {
//         const userDetails = {
//             name: 'PADAYON!',
//             printName: () => {
//                 console.log('ArrowFn user Details', this.name);
//             }

//         };

//        return userDetails.printName();
//     }
// }

// const iAm = new Person();

//DISPLAY THE CLASS CHILD COMPONENT AND VALUE
// iAm.printName();
// iAm.printNameArrowFn();


// class Data {
//     content = 'REACT18 + TYPESCRIPT!';

//     fnContent() {
//         console.log("DATA SA content", this.content);
//     }

//     arrowFnContent() {
//         const objectContent = {
//             content: 'SELF TAUGHT!',
//             printConent: () => {
//                 console.log("DATA SA objectContent", this.content);
//             }

            
//         }
//        return objectContent.printConent();
//     }
    
// }

// allContent = new Data();
// allContent.fnContent();
// allContent.arrowFnContent();


// class InfinitProgrammers{
//     names = ['MARK', 'MARKO', 'EVAN', 'JOSHUA', 'CHARLES'];

//     programmersList(){
//         console.log('PROGRAMMER DATA', this.names);
//     } 

//     programmersArrowFn () {
//         const programmersActive = {
//             names: ['NIGS', 'JAMES','RUSSELL','MARK ALFRED'],
//             printName: () => {
//                 console.log("DATA SA", this.names);
//             }
//         }
//         return programmersActive.printName();
//     }
// }


// infinitData = new InfinitProgrammers();
// infinitData.programmersList();
// infinitData.programmersArrowFn();


// class Printer {
//     data = "PADAYON RA DIHA KAYA NIMO NA!"

//     //OLD FUNCTION  JS 
//     printNameData(){
//         console.log("OLD SYNTAX JS", this.data);
//     }

//     //STANDARD SYNTAX KARUN NA ADLAW!
//     printArrowFnData = () => {
//         console.log("SYNTAX SA ARROW FN", this.data);
//     }
// }

// onClickToPrint = new Printer();
// onClickToPrint.printNameData();
// onClickToPrint.printArrowFnData();

// const customPrinter = {
//     name: 'PADAYON LANG!',
//     printNameRef: onClickToPrint.printArrowFnData,
//     printNameArrowFnRef: onClickToPrint.printArrowFnData,

// }

// customPrinter.printNameRef();
// customPrinter.printNameArrowFnRef();


// PROMISE AND ASYNC+AWAIT! ############################################################################################################

//SET TIMEOUT!
// function calculateSquareArea() {
//     setTimeout(() => {
//         const squareArea = 500*200;
//         console.log(squareArea);

//     }, 500);
// }

// calculateSquareArea();


//PROMISE WITH SET TIMEOUT WITH INHERETANCE ###########################################################################################################
// function calculateSquareAreaData() {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const squareData = 5*5;
//             resolve(squareData);
//         }, 500);
//     })
// }


// function onFulfilled(data) {
//     console.log("onFullfilled data:", data);
// }

// function onRejected(reason){
//     console.log('onRejected data:', reason);
// }

// calculateSquareAreaData()
// .then(onFulfilled, onRejected)
// .catch((reason) => {
//     console.log("REASON NAGA ERROR!", reason);
// });


//PROMISE WITH SET TIMEOUT AND THEN AND CATCH USING ARRAYS! #########################################################################################
// const arraysPromises = [
//     new Promise((resolve, reject) => setTimeout(() => reject("bunal"), 500)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(200), 200)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(300), 300)),
// ];

// function onFulfilled(data){
//         console.log('DATA!', data);
// }

// //all, allSettled, any, race ######
// Promise.any(arraysPromises)
//     .then(onFulfilled)
//     .catch((reason) => {
//         console.log("SANAOL MAY REASON", reason);
// });


//PROMISE AND ASYNC+AWAIT  ###############################################################################################################################
// let count = null;
// let sum = null;
// total = null;

// function changeNumber() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             count = 4;
//             sum = 5
//             total = count + sum;

//             resolve(total);
//         }, 5000);
//     })
// }

// async function changes() {
//     await changeNumber();
//     console.log("DATA!", total);
// }

// //callback
// changes();

//EXPORT AND IMPORT ######################################################################################################################################

//EXPORT FUNCTION BEFORE DECLARATION  ###############################
















