const operations = require("./operations");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", x => {
    rl.question("Enter the first number: ", y => {
        rl.question(`
          Please select from the following options:
          
          [1] findPrime         
          
          Enter your choice: `,
            choice => {
         x = +x
         y = +y
                if (!operations.validateRange(x, y)) {
                    console.log("Only numbers are allowed! Please restart the program.");
                } else {
                    switch (choice) {
                        case '1':
                            console.log(`the friendly intergers of ${x} and ${y} are ${JSON.stringify(operations.findRange(x, y))}`);
                            break;
                        default: console.log('please restart the program and choose numbers  between 100 and 300');
                            break;
                    }
                }
                rl.close();
            }
        );

    });
});