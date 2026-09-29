// ☐ Criar o arquivo app.js.
// ☐ No app.js, importar readline-sync e o módulo com require().
// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.

const entrada = require('readline-sync');
const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento");

console.log("\n----- CALCULAR ORCAMENTO -----")

const nome_cliente = entrada.question("digite o nome do cliente: ");
const valor_Materiais = entrada.questionFloat("digite o valor dos materiais: ");
const horas_servico = entrada.questionFloat("digite as horas de servico: ");

const MaoObra = calcularMaoDeObra(horas_servico);
const total = calcularTotal(valor_Materiais, horas_servico);
const Desconto = verificarDesconto(total);

console.log("\n---- RELATÓRIO DO SERVICO ----");
console.log(`cliente: ${nome_cliente}`);
console.log(`Materiais: R$ ${valor_Materiais.toFixed(2)}`);
console.log(`Mão de obra: R$ ${MaoObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situacao do Desconto: ${Desconto}`);