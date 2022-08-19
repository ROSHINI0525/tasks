const player= prompt("choice:");
console.log("options:"+ player);
console.log("Opponent choice:")
let Opponent=Math.floor(Math.random() * 3);
if (Opponent==0){
Opponent="stone";
}
else if (Opponent==1) {
Opponent="paper";
}
else {
Opponent="scissor";
}
console.log(Opponent);if (player==Opponent)
{
console.log("tie");
}
else if(player=="stone"&&Opponent=="paper"){
console.log("Opponent wins!");
}
else if(player=="stone"&&Opponent=="scissor"){
console.log("player wins!");
}
else if(player=="paper"&&Opponent=="scissor"){
console.log("Opponent wins!");
}
else if(player=="paper"&&Opponent=="stone"){
console.log("player wins!");
}
else if(player=="scissor"&&Opponent=="paper"){
console.log("player wins!");
}
else if(player=="scissor"&&Opponent=="stone"){
console.log("Opponent wins!");
}
else{
console.log("please enter a valid input");
}
