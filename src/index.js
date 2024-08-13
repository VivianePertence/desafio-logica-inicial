let nomeHeroi = "Viviane"
let xpHeroi = 1800;

let nivelHeroi;

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);