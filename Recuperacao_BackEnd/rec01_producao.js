// Objetivo: Revisar variáveis, operações matemáticas e saída de dados.
// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const caixas = 75
const horas = 8

const total = caixas * horas

console.log(`Em ${horas} Horas e com ${caixas} Caixas por hora, serao feitas ao final do dia ${total} Caixas`);
