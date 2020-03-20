const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(number) {
  console.log(`you entered number ${number}`);
});
