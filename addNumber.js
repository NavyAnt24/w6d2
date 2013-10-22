var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, callback) {
  if (numsLeft ===0) {
    callback(sum);
    return;
  }

  reader.question("Input a number: ", function (answer) {
    sum += parseInt(answer);
    numsLeft -= 1;
    console.log(sum);
    addNumbers(sum, numsLeft, callback);

  })
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});