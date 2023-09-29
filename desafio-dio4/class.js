class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }
    
    atacar(ataque) {
        console.log(`o ${this.nome} é ${this.tipo} e atacou usando ${ataque}, com apenas a idade de ${this.idade} anos`);
    }
}
    let mago = new hero("João", 19, "mago")
    mago.atacar("magia")


