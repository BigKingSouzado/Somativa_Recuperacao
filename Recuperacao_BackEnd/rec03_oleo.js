// Objetivo: Aplicar uma estrutura condicional simples.
// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a máquina precisa de inspeção.
// O programa deve:
// ☐ Solicitar o nível de óleo em porcentagem.
// ☐ Usar if/else para verificar se o nível está dentro do intervalo.
// ☐ Exibir "NÍVEL NORMAL" quando estiver entre 40 e 80.
// ☐ Exibir "INSPEÇÃO NECESSÁRIA" nos demais casos.
// ☐ Exibir também o valor informado.

const entrada = require('readline-sync');

console.log(`----- Verificador de nivel de oleo -----`)
const quantidade_oleo = entrada.questionFloat("Qual a porcentagem de oleo da maquina?: ");

if (quantidade_oleo >= 40 && quantidade_oleo <= 80){
    console.log(` A porcentagem ${quantidade_oleo}% de Oleo\n ---- Status ---\n"NIVEL NORMAL"`);
} else {
    console.log(`A porcentagem ${quantidade_oleo}% de Oleo\n ---- Status ---\n"INSPECAO NECESSARIA"`);
}