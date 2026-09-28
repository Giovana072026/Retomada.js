const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

frutas.push("manga");
frutas.shift();

for (const fruta of frutas) {
    console.log(fruta);
}