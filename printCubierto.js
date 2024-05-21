const sc = require("prompt-sync")();

function Tenedor() {
    console.log("Tenedor:");
    console.log("l  l  l");
    console.log("l  l  l");
    console.log(" l l l ");
    console.log("   l   ");
    console.log("   l   ");
    console.log("   l   ");
}

function Cuchillo() {
    console.log("Cuchillo:");
    console.log("   l   ");
    console.log(" l l   ");
    console.log("l  l   ");
    console.log("l  l   ");
    console.log(" l l   ");
    console.log("   l   ");
    console.log("   l   ");
    console.log("   l   ");
}

let cubierto;
do {
    cubierto = sc("Elige un cubierto (tenedor/cuchillo): ");
    if (cubierto === "tenedor") {
        Tenedor();
    } else if (cubierto === "cuchillo") {
        Cuchillo();
    } else {
        console.log("Solo se puede elegir tenedor o cuchillo");
    }
} while (cubierto !== "salir");
