const operations = require("./operations");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array of integers", x => {
    rl.question(`
          Please select from the following options:
          
          [1] findPrime         
          
          Enter your choice: `,
        choice => {
            x = x.split(',')
            x = x.map((elem) => {
                return +elem
            })
            console.log(x);
            if (!operations.validateData(x)) {
                console.log(operations.validateData(x));

                console.log("Only array of numbers is allowed! Please restart the program.");
            } else {
                switch (choice) {
                    case '1':
                        console.log(`the integers of ${x} that are dividable by 5 and not dividable by 7 and their sum is ${operations.findData(x)}`);
                        break;
                    default: console.log('please restart the program and choose number between 1 and 4');
                        break;
                }
            }
            rl.close();
        }
    );

});