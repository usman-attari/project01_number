import inquirer from "inquirer";
 
type ansType = {
         userGuess : number
}
const systemGeneratedNo    = Math.floor(Math.random()  * 10);

const answers : ansType=  await inquirer.prompt([{

        type: "number",
        name: "userGuess",
        message: "write your Guess b.w 1 to 10: "
}

])

const {userGuess} = answers;
    if(userGuess === systemGeneratedNo) {
        console.log(userGuess, "userGuess" , systemGeneratedNo, 'sys')
        console.log("Yeaaa Your answer is correst \ n You win!")
    } else  {
        console.log("Please try again Batter luck  Next Time!")
    }



 
