function TesteCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');	
    if (cpf.length != 11 || cpf === "00000000000" || cpf == "11111111111" || 
    cpf == "22222222222" || 
    cpf == "33333333333" || 
    cpf == "44444444444" || 
    cpf == "55555555555" || 
    cpf == "66666666666" || 
    cpf == "77777777777" || 
    cpf == "88888888888" || 
    cpf == "99999999999") 
    // console.log('invalid')
    
    // valida 1 digito
    soma = 0
        for (i=0; i<=9; i++) soma =+ parseInt(cpf.charAt(i)) * (10 - i);
        resto = 11 - (soma % 11)
         
        if (resto == 10 || resto == 11) resto = 0
        if (resto != parseInt(cpf.charAt(9)))
        console.log('invalid')
    // valida 2 digito
    soma = 0
        for (i=0;i<=10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = 11 - (soma % 11)
        if (resto == 10 || resto == 11)
            resto = 0
        if (resto != parseInt(cpf.charAt(10)))
        console.log('invalid')

    return true


}

cpf = "12345678909"
const isExpres = TesteCPF(cpf)
console.log(isExpres)