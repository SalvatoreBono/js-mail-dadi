const player = Math.floor(Math.random() * 6) + 1;
const bot = Math.floor(Math.random() * 6) + 1;
console.log("Player:" + " " + player)
console.log("Bot:" + " " + bot)
if (player > bot) {
    console.log("Hai vinto")
} else if (bot === player) {
    console.log("Pareggio")
} else {
    console.log("Hai perso")
}
