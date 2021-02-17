const word = prompt("Enter a word:");


let vowelNum = 0;
let backwards = "";

[...word].forEach(letter => {
  const lowerLetter = letter.toLowerCase();
  if (
    lowerLetter === "a" ||
    lowerLetter === "e" ||
    lowerLetter === "i" ||
    lowerLetter === "o" ||
    lowerLetter === "u" ||
    lowerLetter === "y"
  ) {
    vowelNum++;
  }
  backwards = letter + backwards;
});


{console.log(`${word} has ${vowelNum} vowels`)};

if (word.toLowerCase() === backwards.toLowerCase()) {
  console.log("It's a palindrome");}
else 
console.log("It's not a palindrome");