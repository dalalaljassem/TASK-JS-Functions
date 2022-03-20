/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(){
    console.log("Dalal");
}

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
const birthYear  = 1998;
function printAge(birthYear){
    age = 2022 - birthYear;
console.log(age);
}
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name,lang){

let dictionary = {
"English" : "Hello" , 
"Spanish" : "Hola" , 
"French" : "Bonjour" , 
"Turkish" : "Merhaba" , 
}

console.log(dictionary[lang] + name);

}

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

let n1 = 10; 
let n2 = 20;
function printMax(n1,n2){
    let max = n1; 
    if ( n1 > n2 ){
        console.log(max);
    }
    else {
        console.log(n2);
    }
}