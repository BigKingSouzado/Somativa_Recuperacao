// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.

const entrada = require('readline-sync');

const nome_peca = entrada.question("Digite o nome da peca: ");
const quantidade_peca = entrada.questionInt("Digite a quantidade de pecas que deseja comprar: ");
const preco_unitario = entrada.questionFloat("Qual o valor unitario da peca que você deseja comprar?: ");
const total = quantidade_peca * preco_unitario

console.log(`----- Calculo de Lote -----`)
console.log(` Peca: ${nome_peca}\n Valor Unitario: ${preco_unitario}\n Quantidade: ${quantidade_peca}\n Total a pagar: ${total.toFixed(2)} Reais`);