//La declaración break se utiliza dentro de los Bucles For. Nos permite "romper" o finalizar el bucle con antelación 
//si se cumple una condición específica.
let text = "";
for (let i = 0; i < 5; i++) {
  if (i == 3) break;
  text += i + "<br>";
}
console.log(text);

let text1 = "";i = 0;
while (i < 5) {
  text1 += i + "<br>";
  i++;
  if (i === 3) break;
}

console.log(text1);


const food = "algodon";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
console.log(food)



outerBlock: {
    innerBlock: {
      console.log("1");
      break outerBlock; // breaks out of both inner_block and outer_block
      console.log(":-("); // skipped
    }
    console.log("2"); // skipped
  }


 