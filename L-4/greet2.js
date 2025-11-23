module.exports.greetee = function (){
    console.log("Greeting from greet2.js");
}
// Alternative way to export
const greetee = function (){
    console.log("Greeting from greet2.js");
}
module.exports = {greetee};