function TesteCPF(cpf) {
    let soma
    let resto
    soma = 0
        if (cpf === "00000000000") return false

        for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1,i)) * (11 - i);
        resto = (soma * 10)% 11
        const resultado = soma + resto

        console.log(resultado)
       
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(cpf.substring(9, 10)) ) return false

}

cpf = "12345678909"
const isExpres = TesteCPF(cpf)
console.log(isExpres)