const n: string = "Wagner";
console.log(`hello world:${n}`);

import * as inquirer from "inquirer";

inquirer.prompt([
    {
        name: "first_name",
        message: "What is your name?"
    }
]).then(answers => {
    console.log(`you answered: ${answers.first_name}`);
})