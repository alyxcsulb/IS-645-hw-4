const words = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter any word(s) followed by the word 'stop' to quit:");
  if (word !== "stop") {
    words.push(word);
  }
  
console.log("You have entered the following words:");
words.forEach(w => {
  console.log(w)
})

else{
    console.log('No words to display, Stop was the first word entered')}
};