let invoice = {
    name: "João",
    age: 19,
    products: {
        0: ["Fazer 250", 25.490],
        1: ["Ferrari", 400000],
        2: ["Avião", 1000000]
    }
}

function generateInvoce(invoice) {
    console.log(`O comprador é ${invoice.name}. A idade é ${invoice.age}`)
    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index]
            console.log(`${productName}, ${productPrice}`);
    } // para percorrer todos os produtos lá dentro, e n retorna object Object    
}
generateInvoce(invoice)


let invoice2 = {
    name: "Luís",
    age: 20,
    description: {
        0: ["feio", true],
        1: ["um maskeiko", true],
        2: ["gay", true]
    }    
}

function generateInvoce2(invoice2) {
    for (let i in invoice2.description) {
        let [descriptionPerson, descriptionTrue] = invoice2.description[i]
        console.log(` O ${invoice2.name} é: ${descriptionPerson}, ${descriptionTrue}`);
    }
}

generateInvoce2(invoice2)