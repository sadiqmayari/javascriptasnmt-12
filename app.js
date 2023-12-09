document.write("<h1>*Muhammad Sadiq CCO-116650*</h1>");

//math methods for round ciel and floor(Posistive integer)
document.write("<h2>Math methods for round ciel and floor(Posistive integer)</h2>")
var integerNumber = +prompt("Write a Positive Integer(Number):")

if(integerNumber>0){
document.write("<h2>Number: "+ integerNumber+"<br>")
document.write("Round: "+ Math.round(integerNumber)+"<br>")
document.write("Floor: " +Math.floor(integerNumber)+"<br>")
document.write("Ciel: "+ Math.ceil(integerNumber)+"<br>")
}else{
    document.write("Sorry You did not put a Positive integer")
}

document.write("<br><br><br>");

//math methods for round ciel and floor(Nagative Number)
document.write("<h2>Math methods for round ciel and floor(Nagative Number)</h2>")
var integerNumber2 = +prompt("Write a Nagative Integer(Number):")

if(integerNumber2<0){
document.write("<h2>Number: "+ integerNumber2+"<br>")
document.write("Round: "+ Math.round(integerNumber2)+"<br>")
document.write("Floor: " +Math.floor(integerNumber2)+"<br>")
document.write("Ciel: "+ Math.ceil(integerNumber2)+"<br>")
}else{
    document.write("Sorry You did not put a nagative integer")
}

document.write("<br><br><br>");


document.write("<h2>Absolute Value of Last input: "+Math.abs(integerNumber2))

document.write("<br><br><br>");


// Simulate a dice roll
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the result in the browser
document.write("The value of the dice is: " + diceValue
);


document.write("<br><br><br>");

// Simulate a coin toss (1 for heads, 0 for tails)
var coinValue = Math.round(Math.random()*2 + 1);
if (coinValue === 1) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}

document.write("<br><br><br>");


// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) ;

// Display the result in the browser

document.write("<h2>Random number between 1 and 100: " + randomNumber+"</h2>");


document.write("<br><br><br>");

var secretNumber = 4;

var userTry = +prompt("Please Write the Secret Number:");
if(userTry===secretNumber){
    alert("Wow! You Guesed Right...")


}else if(userTry===secretNumber+1 || userTry===secretNumber-1){
    alert("OH Come On... You were too Close")
}
else{
    alert("Oops! Better Luck Next Time: ")
}