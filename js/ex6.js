r_num = Math.floor((Math.random() * 100) + 1);

let count = 0;
while(true){
    in_num = Number(prompt("Guess a number between 1 and 100 inclusive: "));
    count++;
    if(in_num == r_num){
        console.log(`Correct! It took ${count} attempts to guess the right number`);
        break;

    }else if(in_num > r_num){
        alert("Too high, guess again");
        console.log(`${in_num} is Too high`);

    }else if(in_num < r_num){
        alert("Too low, guess again");
        console.log(`${in_num} is too low`);
    }

}