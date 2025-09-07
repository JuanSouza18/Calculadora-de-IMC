// Calcular IMC = peso / (altura * altura)
function calcularIMC(peso, altura) {  // função para calcular o IMC
    return peso / (altura * altura); // retorna o valor do IMC
}

function verificarNumero(valor) { // função para verificar se o valor é um número válido
    valor = valor.trim(); // remove espaços em branco no início e no fim

    if (valor === "") { // verifica se o campo está vazio
        return "⚠️ O campo não pode estar vazio.";
    }

    if (isNaN(valor)) { // verifica se o valor não é um número
        return "⚠️ Digite somente números.";
    }

    return "ok"; // retorna "ok" se o valor for válido
}

function main() { // função principal
    const p = document.getElementById("txtPeso").value; // obtém o valor do campo de peso
    const a = document.getElementById("txtAltura").value; // obtém o valor do campo de altura 

    // Verificar peso
    let validacaoPeso = verificarNumero(p); 
    if (validacaoPeso !== "ok") {
        alert(validacaoPeso);
        return;
    }

    // Verificar altura
    let validacaoAltura = verificarNumero(a);
    if (validacaoAltura !== "ok") {
        alert(validacaoAltura);
        return;
    }

    // Converter para número
    const peso = parseFloat(p);
    const altura = parseFloat(a);

    // Calcular IMC
    const imc = calcularIMC(peso, altura);

    // Exibir resultado
    document.getElementById("exibirResultado").value = imc.toFixed(2);
}

function limpar() { // função para limpar os campos
    document.getElementById("txtPeso").value = "";  // limpa o campo de peso
    document.getElementById("txtAltura").value = ""; // limpa o campo de altura
    document.getElementById("exibirResultado").value = "";  // limpa o campo de resultado
}
