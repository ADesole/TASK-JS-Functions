/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log("Ali Abdullah Akbar");
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  console.log(`Age is ${2022 - birthYear}`);
}
printAge(1998);
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
function printHello(language, name) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("en", "Ali");
printHello("es", "Ali");
printHello("fr", "Ali");
printHello("tr", "Ali");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  max = num1;
  if (num1 > num2) {
    console.log(`The bigger number is ${num1}`);
  } else {
    console.log(`The bigger number is ${num2}`);
  }
}
printMax(15, 10);
