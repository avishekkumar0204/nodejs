const chalk = require("chalk");
const validator = require("validator");
console.log(chalk.blue("Hello world"));
const isEmail = validator.isEmail("kumaravishek@ak.com");
console.log(isEmail ? chalk.green.inverse("Sucess") : chalk.red.inverse("Fail"));