let heroi = "João";
let experience = 7000;

let classificacao = {
    "Noob": experience >= 0 && experience <=999,
    "Ferro": experience >= 1000 && experience <= 1999,
    "Bronze": (experience >= 2000 && experience <=3999),
    "Prata": (experience >= 4000 && experience <= 5000),
    "Platina": (experience >= 5001 && experience <= 8000), 
    "Ascendente": (experience >= 8001 && experience <= 9000),
    "Imortal": (experience >= 10000 && experience <= 11000),
    "Radiante":  (experience >= 12000 && experience <= 15000),
};

console.log(`${heroi} está classificado como:`);

for (let categoria in classificacao) {
    if (classificacao[categoria]) {
        console.log(categoria);
    }
}

