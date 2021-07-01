console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

let rand  = 77
let userInput = window.prompt("Guess a number between 1 and 100.");
if (userInput < rand) {
    console.log("Too low!");
}

else if (userInput > rand) {
    console.log("Too High!");
}

else {console.log("Congrats! You guessed the right number!");
}



// Exercise 2

let favoriteColor = window.prompt ("What is your favorite color?");
switch (favoriteColor.toLocaleLowerCase);{
    case "blue":
        console.log("Just like the sky, you are too cool!");
    case "black":
        console.log("Beware. You like to walk on the dark side.");
    case "red":
        console.log("Woah! Spicy!");
    case "green":
        (console.log("Green, like money!");
    case "yellow":
        console.log("Sweet, like sunshine!");
    break;
    default: console.log("What's going on? You don't have a favorite color?");


}
