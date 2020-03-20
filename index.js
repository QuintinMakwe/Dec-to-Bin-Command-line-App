const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", async function(number) {
  let convertedNumber = parseInt(number, 10).toString(2);
  if (convertedNumber.toString() === NaN.toString()) {
    rl.question("Final try, enter a valid number please: ", async function(
      number2
    ) {
      convertedNumber = await parseInt(number2, 10).toString(2);
      if (convertedNumber.toString() === NaN.toString()) {
        console.log("Try again when you're ready to follow instructions");
        rl.close();
      } else {
        console.log(convertedNumber);
        rl.close();
      }
    });
  } else {
    console.log(convertedNumber);
    rl.close();
  }
});
