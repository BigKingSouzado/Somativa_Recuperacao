// Objetivo: Combinar repetição, entrada de dados e acumulador.
// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.

const entrada = require("readline-sync");

let acumulador = 0;

console.log(`----- SOMA DOS MINUTOS DO ATENTIMENTO -----`)

for (let i = 1; i <= 6; i++) {
    const minutagem = entrada.questionFloat(`Digite o minuto do atendimento ${i}: `);
    acumulador += minutagem;
}

const media = acumulador / 6;

console.log("\n---- RESULTADO DAS MINUTAGENS ----");
console.log(`Soma das minutagens do atendimento: ${acumulador} \nMedia final: ${media}`);
