class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }
    
    atacar(ataque) {
        console.log(`o ${description.name} é ${description.tipo[0]} e atacou usando ${ataque}, com apenas a idade de ${description.age} anos`);
    }
}

let description = {
    name: "João",
    age: 19,
    tipo: {
        0: ["mago"],
        1: ["guerreiro"],
        2: ["monge"],
        3: ["ninja"],
    },
    ataque: {
        0: ["usando magia"],
        1: ["usando espada"],
        2: ["usando artes marciais"],
        3: ["usando shuriken"]
    },
}

    let mago = new hero()
    mago.atacar("magia")


