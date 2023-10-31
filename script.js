const array = ['snake', 'water', 'gun'];
const result = array[Math.floor(Math.random() * array.length)];
do{
let choice = prompt("Enter your choice: Snake, water, gun");
if (result == choice) {
  alert("Match Draw")
}
else if (result == 'snake' && choice == 'water') {
  alert("You loose");
}
else if (result == 'water' && choice == 'gun') {
  alert("You loose");
}
else if (result == 'water' && choice == 'snake') {
  alert("You win");
}
else if (result == 'snake' && choice == 'gun') {
  alert("You win");
}
else if (result == 'gun' && choice == 'snake') {
  alert("You loose");
}
else if (result == 'gun' && choice == 'water') {
  alert("You win");
}
else {
  alert("invalid choice");
}
}
  while (
  confirm("Do you want to play again")
  )
