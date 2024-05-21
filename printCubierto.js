const input = require("prompt-sync")()
var cubierto = prompt("Elige cubierto: ");

if (cubierto === "tenedor") {
    console.log(Tenedor());
} if (cubierto === "cuchillo") {
    console.log(Cuchillo());
} else {
    alert("Solo se puede elegir tenedor o cuchillo")
}

function Tenedor() {
    console.log("Tenedor: ")
    Console.log("l  l  l");
    Console.log("l  l  l");
    Console.log(" l l l ");
    Console.log("   l   ");
    Console.log("   l   ");
    Console.log("   l   ");
}


function Cuchillo() {
    console.log("Cuchillo: ")
    Console.log("   l   ");
    Console.log(" l l   ");
    Console.log("l  l   ");
    Console.log("l  l   ");
    Console.log(" l l   ");
    Console.log("   l   ");
    Console.log("   l   ");
    Console.log("   l   ");
 
    
}