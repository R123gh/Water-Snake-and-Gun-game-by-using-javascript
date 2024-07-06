  

let waterscore = 0;
let snakescore = 0;
let gunscore = 0;

let a = [];
for (let i = 0; i < 10; i++) {
    if (i >= 3) {
        alert("Time over");
        break;
    }
    a.push(prompt("Enter items "));
    console.log(a[i]);
}

function result(item) {
    if (item == "water") {
        waterscore = waterscore + 1;
    } else if (item == "gun") {
        gunscore = gunscore + 2;
    } else if (item == "snake") {
        snakescore = gunscore - waterscore;
    }
}

for (let i = 0; i < a.length; i++) {
    result(a[i]);
}




let totalScore = waterscore + gunscore + snakescore;
console.log(totalScore);




if (totalScore != 0) {
    alert("You won the match");
} else {
    alert("You lose");
}





  
   
    

   















