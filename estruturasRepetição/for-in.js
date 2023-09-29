const aluno = {
    nome: "Bruno",
    sobrenome: "Dias",
    age: 20,
    hobbies: "Nadar"
}

let notas = [100, 80, 75, 30, 64]
let aprovados = 0
let reprovados = 5

for (let description in aluno) {
    console.log(aluno[description]);
} // percorre objetos



for (let percorre of notas) {
    percorre >= 60? aprovados ++ : reprovados++
} // percorrer arrays
console.log("Aprovados: " + aprovados)
console.log("Reprovados: " + reprovados)
