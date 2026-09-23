// Objetivo: Organizar regras do programa em funções com parâmetros e retorno.
// Uma indústria deseja calcular o percentual de aproveitamento de matéria-prima. O aproveitamento é calculado por (quantidade útil / quantidade total) × 100.
// O programa deve:
// ☐ Criar a função calcularAproveitamento(util, total) que retorne o percentual.
// ☐ Criar a função classificarAproveitamento(percentual).
// ☐ Classificação: 90% ou mais = "EXCELENTE"; de 75% a 89,99% = "ADEQUADO"; abaixo de 75% = "REVISAR PROCESSO".
// ☐ Solicitar quantidade total e quantidade útil pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir total, quantidade útil, percentual e classificação.

const entrada = require("readline-sync");

console.log(`----- CALCULAR EFICIENCIA -----`)

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75 && percentual <= 89.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const producaoTotal = entrada.questionFloat("Producao Total: ");
const producaoUtil = entrada.questionFloat("Producao Util: ");

const eficiencia = calcularAproveitamento(producaoUtil, producaoTotal);
const classificacao = classificarAproveitamento(eficiencia);

console.log("---- RELATORIO DA EFICIENCIA ----");

console.log(`Producao prevista: ${producaoTotal}`);
console.log(`Producao real: ${producaoUtil}`);
console.log(`Eficiencia: ${eficiencia.toFixed(2)}%`);
console.log(`Classificacao: ${classificacao}`);