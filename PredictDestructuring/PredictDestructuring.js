//Problem 1: No error found. Output "Tesla", "Mercedes". Specific to index using a ,
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Problem 2: Output "Reference error: name is not defined".
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
//Set otherName to be employee name (Elon)
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Problem 3: Output 12345 undefined. Searching for 'password' not in object + wrong order.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//Problem 4: Output false, true. 2,5,2 numbers do not equal first and first does equal 3rd index and value.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
// 8 commas -> third is index 9 line 37
//Predict the output
console.log(first == second);
console.log(first == third);

//Problem 5: Output [1,5,1,8,3,3], 1, 5. 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
//searching for object lastTest calling the variable key. willThisWork is a new new variable. 
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Destructure using {} for objects and [] for arrays!


