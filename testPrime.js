const operations = require("./operations");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", x => {
    rl.question(`
          Please select from the following options:
          
          [1] findPrime         
          
          Enter your choice: `,
        choice => {
            if (!operations.validatePrime(x)) {
                console.log("Only numbers are allowed! Please restart the program.");
            } else {
                switch (choice) {
                    case '1':
                        console.log(`the primes of ${x} are ${operations.findPrime(x)}`);
                        break;
                    default: console.log('please restart the program and choose number between 1 and 4');
                        break;
                }
            }
            rl.close();
        }
    );

});