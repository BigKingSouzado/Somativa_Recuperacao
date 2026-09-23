// Objetivo: Integrar objetos, arrays, repetição e condição.
// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

const entrada = require(`readline-sync`);

const materiais = [];

console.log(`----- REGISTRO DE FERRAMENTAS -----`)

for (let i = 0; i <=3; i++){
    const arsenal = {
        ferramenta_nome: entrada.question(`Digite o nome da ferramenta ${i+1}: `),
        quantidade: entrada.questionInt(`Digite a Quantidade da ferramenta ${i+1}: `),
        estoque_minimo: entrada.questionInt(`Digite a Quantidade Minima da ferramenta ${i+1}: `)
    };
    materiais.push(arsenal);
}

console.log("---- RELATORIO DAS FERRAMENTAS ----");

for (let i = 0; i < materiais.length; i++){
    const ferramenta = materiais[i];

    let status;
    if (ferramenta.quantidade < ferramenta.estoque_minimo){
        status = "REPOR ESTOQUE";
    }else {
        status = "ESTOQUE OK";
    }
    console.log(`Material: ${ferramenta.ferramenta_nome}`);
    console.log(`Quantidade: ${ferramenta.quantidade}`);
    console.log(`Estoque Minimo: ${ferramenta.estoque_minimo}`);
    console.log(`Situacao: ${status}`);
    console.log("-".repeat(22) );
}

