// Objetivo: Cadastrar e percorrer dados armazenados em um array.
// Crie um programa para cadastrar seis setores de uma fábrica e, ao final, listar todos os setores numerados.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato "1 - Montagem", "2 - Qualidade" etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.

const entrada = require('readline-sync');

const fabrica = [];

console.log(`----- SISTEMA DE CADASTRO DE SETORES -----`);

for (let i = 0; i < 6; i++){
    const nome_setor = entrada.question(`Digite o nome do Setor ${i + 1}: `);                                   
    fabrica.push(nome_setor);
}
console.log("---- CADASTRO DOS SETORES ----");

for (let i = 0; i < fabrica.length; i++) {
    console.log(`${i + 1} - ${fabrica[i]}`);
}

