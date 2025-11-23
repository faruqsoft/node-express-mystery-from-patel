// function statement/Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet(); // Calling the function

// function expression
const sayGoodbye = function() {
    console.log("Goodbye, World!");
};
sayGoodbye(); // Calling the function

// Arrow function
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Calling the function and logging the result

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This function runs immediately upon definition!");
})();

//function are first-class citizens
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput(function(name) {
    console.log("Hello, " + name);
});
// akta function ke onno akta function er argument hisebe use kora jay. eta function ke first-class citizen bole.

//use the function expression on the fly
processUserInput(function(name) {
    console.log("Welcome, " + name + "!");
});
//on the fly mane, function ta ke directly argument hisebe use kora hocche, kono variable e assign na kore.

