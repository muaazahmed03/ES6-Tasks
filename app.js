// ES6 Tasks

// Global Scope

// 1
// var beta = 2;
// 2
// let gama = 2;
// 3
// const alpha = 2;
// 4
// console.log(beta, gama, alpha);
// 5
// Yes 


// Function Scope

// 1
// var myfunction = ()=>{
//     var alpha = "Ok";
// }
// console.log(alpha);
// 2
// let myfunction = ()=>{
//     let beta = "Ok";
// }
// console.log(beta);
// 3
// const myfunction = ()=>{
//     const gama = "Ok";
// }
// console.log(gama);
// myfunction();
// 4
// they can't run 


// Block Scope

// 1
// var alpha = true
// if(alpha === true){
//     var alpha2 = true
// }
// console.log(alpha2);
// yes it's defined 
// 2
// let alpha = true
// if(alpha === true){
//     let alpha2 = true
// }
// console.log(alpha2);
// it's undefined 
// 3
// const alpha = true
// if(alpha === true){
//     const alpha2 = true
// }
// console.log(alpha2);
// it's undefined 


// Hoisting with var:

// 1
// console.log(aplha);
// var aplha = 235;
// it's undefined 

// Hoisting with let and const:

// 1
// console.log(beta);
// let beta = 235;
// Cannot access 'beta' before initialization
// 2
// console.log(gama);
// const gama = 235;
// Cannot access 'beta' before initialization


// Re-declaration

// 1
// var alpha = 23;
// var alpha = "muaaz";
// console.log(alpha);
// output = muaaz 
// 2
// let alpha = 23;
// let alpha = "muaaz";
// cannot use same variable names in let 
// 3
// const alpha = 23;
// const alpha = "muaaz";
// cannot use same variable names in const 


// Re-assignment:

// 1
// var alpha = 1000;
// alpha = "muaaz";
// console.log(alpha);
// output = muaaz 
// 2
// let alpha = 1000;
// alpha = "muaaz";
// console.log(alpha);
// output = muaaz 
// 3
// const alpha = 1000;
// alpha = "muaaz";
// console.log(alpha);
// Assignment to constant variable. at app.js:114:7



// Temporal Dead Zone (TDZ):

// 1
// function sum(){
//     console.log(numb);
//     let numb = 245;
// }
// sum();
// Cannot access 'numb' before initialization
// 2
// function sum(){
//     console.log(numb);
//     const numb = 245;
// }
// sum();
// Cannot access 'numb' before initialization



// When to use var, let, and const:

// 1
// function logNumbers() {
//     for (var i = 0; i < 5; i++) {
//             console.log(i);
//     }
// }
// logNumbers();
// 2
// function logNumbers() {
//     for (let i = 0; i < 5; i++) {
//             console.log(i);
//     }
// }
// logNumbers();
// 3
// function logNumbers() {
//     for (const i = 0; i < 5; i++) {
//             console.log(i);
//     }
// }
// logNumbers();



// String Interpolation:

// 1
// let firstName = "muaaz";
// let lastName = "ahmed";
// console.log(`${firstName} ${lastName}`);

// Multi-line Strings:

// 1
// let firstName = "muaaz";
// let education = "BSCS";
// let uni = "Hamdard University";
// let inst = "Jawan Pakistan";

// console.log(`My name is ${firstName}. I am bachelors in ${education} from ${uni}. My institute name is ${inst}.`);



// Simple Expressions:

// 1
// let num1 = 20;
// let num2 = 30;
// console.log(`the sum of the num1 and num2 is ${num1 + num2}`);


// Function Calls:

// 1
// let greet = (a, b)=>{
//     return a * b;
// }
// console.log(`the product of 5 * 6 is: ${greet(5,6)}`);


// Creating a Tagged Template:

// 1
// let greet = ()=>{
//     console.log(`my name is ${"muaaz"}`);
// }
// greet();


// Formatting:

// function greet(){
//     let myname = "muaaz"
//     console.log(`The string is my name ${myname.toUpperCase()}`);
// }
// greet();



// Conditional Logic:

// let currentHour = new Date().getHours();
// let msg = currentHour < 12 ? `Good morning! The current hour is ${currentHour} AM.` : `Good afternoon! The current hour is ${currentHour % 12 || 12} PM.`;
// console.log(msg);



// Loops within Template Literals:

// let shopArr = ["sugar", "salt", "Flour", "Rice", "Fruits"];

// document.write(`<h1> SHOPPING LIST </h1><br>
//     <li>${shopArr[0]}</li><br>
//     <li>${shopArr[1]}</li><br>
//     <li>${shopArr[2]}</li><br>
//     <li>${shopArr[3]}</li><br>
//     <li>${shopArr[4]}</li><br>`
// );



// Escaping Backticks:

// let backtick = `This is a string with a backtick: \``;
// console.log(backtick);



// Nested Template Literals:

// let rows = `
//     <tr>
//         <td>${`Row 1, Cell 1`}</td>
//         <td>${`Row 1, Cell 2`}</td>
//     </tr>
//     <tr>
//         <td>${`Row 2, Cell 1`}</td>
//         <td>${`Row 2, Cell 2`}</td>
//     </tr>
// `;

// let table = `
// <table border="5">
//     <thead>
//         <tr>
//             <th>Header 1</th>
//             <th>Header 2</th>
//         </tr>
//     </thead>
//     <tbody>
//         ${rows}
//     </tbody>
// </table>
// `;

// document.write(table);


// Simple Condition:

// let age = 22;
// let res = age >= 18 ? "you can allow for vote" : "you are not eligible for vote";
// console.log(res);


// Even or Odd:

// let number = 5;
// let evenOrOdd = number / 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);


// Grade Evaluation

// let score = 85; 
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
// console.log("Grade:", grade);

// // Login Status

// let isLoggedIn = true; 
// let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log("Status Message:", statusMessage);

// // Discount Eligibility

// let isMember = true; 
// let purchaseAmount = 150; 
// let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
// console.log("Discount:", discount);

// // Determine Max Value

// function maxValue(a, b) {
//   return a > b ? a : b;
// }
// console.log("Max Value:", maxValue(10, 20)); 

// // Greeting Message

// function greet(name) {
//   return name ? `Hello, ${name}!` : "Hello, guest!";
// }
// console.log(greet("muaaz"));
// console.log(greet("")); 

// // Mapping Values

// let numbersArray = [1, 2, 3, 4, 5]; 
// let mappedArray = numbersArray.map(num => (num % 2 === 0 ? num * 2 : num * 3));
// console.log("Mapped Array:", mappedArray);

// // Filtering Values

// let stringsArray = ["hi", "hello", "hey", "world", "JS"]; 
// let filteredArray = stringsArray.filter(str => (str.length > 3 ? true : false));
// console.log("Filtered Array:", filteredArray);

// // Copying an Array

// let originalArray = [1, 2, 3, 4]; 
// let copiedArray = [...originalArray];
// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// // Merging Arrays

// let array1 = ["a", "b", "c"];
// let array2 = ["d", "e", "f"];
// let mergedArray = [...array1, ...array2];
// console.log("Merged Array:", mergedArray);

// // Adding Elements to an Array

// let numbers = [10, 20, 30]; 
// let updatedNumbers = [0, ...numbers, 40];
// console.log("Updated Numbers Array:", updatedNumbers);

// // Copying an Object

// let originalObject = { name: "muaaz", age: 25 };
// let copiedObject = { ...originalObject };
// console.log("Original Object:", originalObject);
// console.log("Copied Object:", copiedObject);

// // Merging Objects

// let object1 = { name: "muaaz", age: 25 };
// let object2 = { age: 30, email: "muaazahmed0111@gmail.com" };
// let mergedObject = { ...object1, ...object2 };
// console.log("Merged Object:", mergedObject);

// // Updating Object Properties

// let user = { name: "muaaz", age: 28, email: "muaazahmed0111@gmail.com" };
// let updatedUser = { ...user, email: "muaazahmed0111@gmail.com", address: "123 Main St" };
// console.log("Updated User:", updatedUser);

// Passing Array Elements as Arguments

// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// Combining Multiple Arrays

// function combineArrays(...arrays) {
//     return [].concat(...arrays);
// }
// console.log(combineArrays([1, 2], [3, 4], [5, 6]));

// Rest Parameter with Spread Operator

// function multiply(multiplier, ...args) {
//     return args.map(num => num * multiplier);
// }
// console.log(multiply(2, 1, 2, 3, 4));

// Spread Operator with Nested Structures

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const copiedNestedArray = [...nestedArray];
// copiedNestedArray[0][0] = 99;
// console.log("Original:", nestedArray);
// console.log("Copied:", copiedNestedArray);

// Sum Function

// function sum(...nums) {
//     return nums.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3));

// Average Function

// function average(...nums) {
//     return nums.length ? sum(...nums) / nums.length : 0;
// }
// console.log(average(1, 2, 3, 4));

// First and Rest

// const numbers2 = [10, 20, 30, 40, 50];
// const [first, ...rest] = numbers2;
// console.log("First:", first);
// console.log("Rest:", rest);

// Skip and Rest

// const colors = ["red", "green", "blue", "yellow"];
// const [, , ...remainingColors] = colors;
// console.log("Remaining Colors:", remainingColors);

// Basic Destructuring

// const person = { name: "muaaz", age: 25, email: "muaazahmed0111@gmail.com", address: "123 Main St" };
// const { name, email, ...restProps } = person;
// console.log("Name:", name);
// console.log("Email:", email);
// console.log("Rest:", restProps);

// Nested Destructuring

// const student = {
//     id: 1,
//     name: "muaaz",
//     grades: [90, 80, 85],
//     info: { age: 20, major: "CS" },
// };
// const { id, name: studentName, info: { major }, ...restStudent } = student;
// console.log("ID:", id);
// console.log("Name:", studentName);
// console.log("Major:", major);
// console.log("Rest:", restStudent);

// Filter Even Numbers

// function filterEven(...nums) {
//     return nums.filter(num => num % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5));

// Combine and Sort Arrays

// function combineAndSort(...arrays) {
//     return [].concat(...arrays).sort((a, b) => a - b);
// }
// console.log(combineAndSort([3, 1], [4, 2]));

// Basic Destructuring with Arrays

// const fruits = ["apple", "banana", "cherry"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log("First:", firstFruit);
// console.log("Second:", secondFruit);
// console.log("Third:", thirdFruit);

// Skipping Elements

// const [primaryColor, , tertiaryColor] = colors;
// console.log("Primary Color:", primaryColor);
// console.log("Tertiary Color:", tertiaryColor);

// Rest Operator with Arrays

// const [firstNumber, ...remainingNumbers] = numbers2;
// console.log("First Number:", firstNumber);
// console.log("Remaining Numbers:", remainingNumbers);

// Basic Destructuring with Objects

// const { name: userName, age, city } = { name: "muaaz", age: 25, city: "Karachi" };
// console.log("Name:", userName);
// console.log("Age:", age);
// console.log("City:", city);

// Renaming Variables

// const car = { make: "Toyota", model: "Corolla", year: 2020 };
// const { make: carMake, model: carModel, year: carYear } = car;
// console.log("Car Make:", carMake);
// console.log("Car Model:", carModel);
// console.log("Car Year:", carYear);

// Default Values

// const settings = { theme: "dark" };
// const { theme, language = "English" } = settings;
// console.log("Theme:", theme);
// console.log("Language:", language);

// Array of Arrays

// const nestedArray2 = [[1, 2], [3, 4], [5, 6]];
// const [[a], [b], [c]] = nestedArray2;
// console.log("A:", a);
// console.log("B:", b);
// console.log("C:", c);

// Object within an Object

// const profile = { username: "muaaz", details: { email: "muaazahmed0111@gmail.com", address: "123 Main St" } };
// const { username, details: { email, address } } = profile;
// console.log("Username:", username);
// console.log("Email:", email);
// console.log("Address:", address);

// Mix of Arrays and Objects

// const data = { id: 101, info: [{ name: "Alice" }, { age: 25 }] };
// const { id: dataId, info: [{ name }, { age }] } = data;
// console.log("ID:", dataId);
// console.log("Name:", name);
// console.log("Age:", age);

// Array Parameters

// function printCoordinates([x, y]) {
//     console.log("X:", x);
//     console.log("Y:", y);
// }
// printCoordinates([10, 20]);

// Object Parameters

// function displayUser({ name, age }) {
//     console.log("Name:", name);
//     console.log("Age:", age);
// }
// displayUser({ name: "muaaz", age: 25 });

// List Property Names

// const book = { title: "Book Title", author: "Author Name", year: 2023 };
// console.log(Object.keys(book));

// Count Properties

// const student2 = { name: "muaaz", age: 25, grade: "A", school: "XYZ School" };
// console.log(Object.keys(student2).length);

// Iterate Over Keys

// const product = { name: "Laptop", price: 1000, category: "Electronics" };
// Object.keys(product).forEach(key => console.log(key, ":", product[key]));

// List Property Values

// const movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
// console.log(Object.values(movie));

// Sum Values

// const scores = { math: 90, science: 80, english: 85 };
// console.log(Object.values(scores).reduce((a, b) => a + b, 0));

// Iterate Over Values

// const user = { username: "muaaz", email: "muaazahmed0111@gmail.com", location: "Karachi" };
// Object.values(user).forEach(value => console.log(value));

// List Entries

// console.log(Object.entries(car));

// Convert Object to Array

// const person2 = { firstName: "Muaaz", lastName: "Ahmed", age: 25 };
// console.log(Object.entries(person2));

// Iterate Over Entries

// const settings2 = { theme: "dark", notifications: true, privacy: "public" };
// Object.entries(settings2).forEach(([key, value]) => console.log(key, ":", value));

// Filter Keys

// const inventory = { apples: 5, bananas: 15, oranges: 10, grapes: 20 };
// console.log(Object.keys(inventory).filter(key => inventory[key] > 10));

// Transform Values

// const temperatures = { morning: 20, afternoon: 25, evening: 15 };
// const transformedTemps = Object.fromEntries(
//     Object.entries(temperatures).map(([key, value]) => [key, value * 9 / 5 + 32])
// );
// console.log(transformedTemps);

// Key-Value Swap

// const roles = { admin: "muaaz", editor: "ahmed", viewer: "faraz" };
// const swappedRoles = Object.fromEntries(
//     Object.entries(roles).map(([key, value]) => [value, key])
// );
// console.log(swappedRoles);

// Filter and Map

// const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filterAndMap(arr, filterFn, mapFn) {
//     return arr.filter(filterFn).map(mapFn);
// }
// console.log(filterAndMap(numbers3, num => num % 2 !== 0, num => num ** 2));

// Closure

// function createCounter() {
//     let counter = 0;
//     return function () {
//         counter++;
//         console.log(counter);
//     };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1(); // 1
// counter1(); // 2
// counter2(); // 1
// counter2(); // 2

// Simple Default Parameters

// function greet(name, message = "Hello") {
//     console.log(`${message}, ${name}!`);
// }
// greet("muaaz");
// greet("ahmed", "Hi");

// Default Parameters with Other Arguments

// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }
// console.log(calculateArea());
// console.log(calculateArea(4, 8));

// Square Numbers

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// Convert to Uppercase

// const words = ["apple", "banana", "cherry"];
// const uppercasedWords = words.map(word => word.toUpperCase());
// console.log(uppercasedWords);

// Filter Even Numbers

// const filteredEvenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(filteredEvenNumbers);

// Filter Long Words

// const longWords = words.filter(word => word.length > 5);
// console.log(longWords);

// Log Numbers

// numbers.forEach(num => console.log(num));

// Log Word Lengths

// words.forEach(word => console.log(word.length));

// Sum of Numbers

// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// Concatenate Strings

// const sentence = words.reduce((acc, word) => `${acc} ${word}`);
// console.log(sentence);

// Check for Even Number

// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven);

// Check for Long Word

// const hasLongWord = words.some(word => word.length > 5);
// console.log(hasLongWord);

// Check All Even Numbers

// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

// Check All Long Words

// const allLongWords = words.every(word => word.length > 5);
// console.log(allLongWords);

// Find First Even Number

// const firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);

// Find Long Word

// const firstLongWord = words.find(word => word.length > 5);
// console.log(firstLongWord);

// Find Index of First Even Number

// const indexFirstEven = numbers.findIndex(num => num % 2 === 0);
// console.log(indexFirstEven);

// Find Index of Long Word

// const indexLongWord = words.findIndex(word => word.length > 5);
// console.log(indexLongWord);

// Simple Promise

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(2000).then(() => console.log("Hello, world!"));

// Promise Chain

// function fetchData() {
//     return Promise.resolve({ data: "Sample Data" });
// }
// fetchData().then(data => console.log(data));

// Error Handling

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const user = { name: "John" };
//         user.age ? resolve(user) : reject("User data missing age property.");
//     });
// }
// fetchUserData()
//     .then(user => console.log(user))
//     .catch(err => console.error(err));

// Simulate Network Request

// function getWeather() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.5 ? resolve("Sunny") : reject("Network Error");
//         }, 1000);
//     });
// }
// getWeather()
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// Simple async Function

// async function sayHello() {
//     await delay(2000);
//     console.log("Hello, world!");
// }
// sayHello();

// Fetch Data with async/await

// async function getUserData() {
//     try {
//         const user = await fetchUserData();
//         console.log(user);
//     } catch (err) {
//         console.error(err);
//     }
// }
// getUserData();

// Fetch and Process Data

// function fetchPosts(userId) {
//     return Promise.resolve([{ id: 1, title: "Post 1" }]);
// }
// async function getUserAndPosts() {
//     try {
//         const user = await fetchUserData();
//         const posts = await fetchPosts(user.id);
//         console.log(user, posts);
//     } catch (err) {
//         console.error(err);
//     }
// }
// getUserAndPosts();

// Error Handling in async/await

// async function getUserInfo() {
//     try {
//         const user = await fetchUserData();
//         console.log(user);
//     } catch (err) {
//         console.error(err);
//     }
// }
// getUserInfo();

// Simulate API Calls

// function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("API Data"), Math.random() * 2000);
//     });
// }
// async function getData() {
//     try {
//         const data1 = await apiCall();
//         console.log(data1);
//         const data2 = await apiCall();
//         console.log(data2);
//         const data3 = await apiCall();
//         console.log(data3);
//     } catch (err) {
//         console.error(err);
//     }
// }
// getData();


