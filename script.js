document.addEventListener("DOMContentLoaded", () => {

function gerarAlgarismo(max) {
    return Math.floor(Math.random() * (max + 1));
}

function gerarDoisNumeros() {
    let valorUm = gerarAlgarismo(9);
    let valorDois = gerarAlgarismo(9 - valorUm);
    return [valorUm, valorDois];
}

const contasAResolver = [];

function gerarContas() {
for (let i = 0; i < 25; i++) {
    let numerosACalcular = gerarDoisNumeros();
    contasAResolver.push(numerosACalcular);    
}
}

// i + j = resultado
// contasa

function exibirContas(contas) {
    for (let i = 0; i < 25; i++) {
        //console.log(contasAResolver[i][0] + '+' + contasAResolver[i][1] + "=");
        let readableName = "";
        let sum = 0;
        for (let j = 0; j <= 1; j++) {
            readableName += contasAResolver[i][0];
            readableName += j==0? " + " : " = ";
            sum += contasAResolver[i][0];
        }
    }
}

console.log(contasAResolver);

function gerarContas() {
    doisNumeros = gerarDoisNumeros();
    contasAResolver = doisNumeros.push(gerarDoisNumeros());
}

console.log(valor1);
console.log(valor2);

})