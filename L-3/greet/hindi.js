const jsonObj = require('./greeting.json');//json file require korle object hisebe data ase
console.log(jsonObj)
function greet(){
    console.log(jsonObj.hindi);
}   
module.exports = greet;