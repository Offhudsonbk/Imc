// Importe o módulo 'prompt-sync' para obter entrada do usuário
const prompt = require('prompt-sync')();

// Obtenha o peso em quilogramas (kg) e a altura em metros (m) do usuário
let peso = parseFloat(prompt("Informe seu peso (kg): "));
let altura = parseFloat(prompt("Informe sua altura (m):"));

// Calcule o IMC (Índice de Massa Corporal)
let imc = calcularIMC(peso, altura);

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

// Exiba o valor do IMC com duas casas decimais
console.log("Seu IMC é= " + imc.toFixed(2));

// Verifique se o IMC está dentro da faixa saudável
if (imc <= 52) {
    console.log("Seu IMC está dentro da faixa saudável.");
} else {
    console.log("Seu IMC está acima da faixa saudável.");
}