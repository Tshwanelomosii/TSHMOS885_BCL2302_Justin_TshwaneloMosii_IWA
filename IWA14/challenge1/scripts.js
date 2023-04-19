const firstName = 'John';  //The variables firstName, age, and hobby are now declared using const to prevent accidental reassignment.
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {  //The function logTwice now takes in a parameter, which is logged twice using console.log
  console.log(parameter);
  console.log(parameter);
}

function Hobby1 () {  //The function name hobby has been changed to Hobby1 to avoid naming conflicts.
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);  //The function greetWithHobby calls the logTwice function 
                                                              //with the correct message string, which includes the firstName, age, and hobby variables.
}

Hobby1();  //The function Hobby1 is then called at the end to produce the expected output.
