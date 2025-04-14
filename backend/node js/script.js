
// process : This object provides information about , and control over , the current NOde.js process.

// Process.argv : returns an array containing the command-line arguments passed when the node.js process was launched.
// console.log(process.argv);

// let args = process.argv;
// for(let i = 2  ; i < args.length ; i++){
//     console.log("hello to", args[i]);
// }

// const someValue = require("./math");
// console.log(someValue);
// require() a built-in function to include external modules that exist in separate files.

// const math = require("./math");
// console.log(math);

// const info = require("./Fruits");
// console.log(info);
import {sum ,PI} from "./math.js";

console.log(sum(1,2));