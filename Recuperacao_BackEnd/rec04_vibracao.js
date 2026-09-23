// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.

const entrada = require('readline-sync');

console.log(`----- Sensor de Vibracao de Equipamento -----`);

const valor_vibracao = entrada.questionFloat("Qual o valor da vibracao do equipamento?: ");

if (valor_vibracao <= 3){
    console.log(`---- STATUS ----\nO equipamento de vibracao ${valor_vibracao}mm/s\nse encontra em situacao: ESTAVEL`);
} else if (valor_vibracao >= 3 && valor_vibracao <= 6){
    console.log(`---- STATUS ----\nO equipamento de vibracao ${valor_vibracao}mm/s\nse encontra em Situacao: ATENCAO`);
} else {
    console.log(`---- STATUS ----\nO equipamento de vibracao ${valor_vibracao}mm/s\nse encontra em Situacao: CRITICA`);
}