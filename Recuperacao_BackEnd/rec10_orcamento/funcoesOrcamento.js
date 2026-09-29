// ☐ Criar uma pasta chamada rec10_orcamento.
// ☐ Criar o arquivo funcoesOrcamento.js.
// ☐ Criar calcularMaoDeObra(horas), considerando R$ 95,00 por hora.
// ☐ Criar calcularTotal(valorMateriais, horas), somando materiais e mão de obra.
// ☐ Criar verificarDesconto(total), retornando "DESCONTO DE 10%" quando total >= R$ 1000,00 e "SEM
// DESCONTO" nos demais casos.
// ☐ Exportar as funções com module.exports.

function calcularMaoDeObra(horas) {
    return horas * 95;
}

function calcularTotal(valorMateriais, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valorMateriais + maoDeObra;
}

function verificarDesconto(total) {
    if (total >=1000) {
        return "DESCONTO DE 10%";
    } else {
        return "SEM DESCONTO";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};