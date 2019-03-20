// console.log("Yee haw to package management")
const chalk = require('chalk');
 
console.log(chalk.magenta('Hello world!'));

var arr = [1, 1, 2, 2, 3, 5]
 
require("uniq")(arr)
console.log(chalk.red(arr))
 
//Prints:
//
//  1,2,3,5
//