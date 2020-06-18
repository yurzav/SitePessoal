let saldo_disponível = 1500;

alert('Vai no quarto do papai e da mamãe, manda foto do cartão de crédito! Frente e Verso!');

alert('Seu saldo disponível é' + saldo_disponível + 'R$');

let valor_saque = window.prompt('Quanto deseja sacar');

if(valor_saque <= saldo_disponível) {
    saldo_disponível = saldo_disponível - valor_saque;

    console.log('Eu saquei seu dinheiro');

    console.log('Seu novo saldo é de', saldo_disponível);

    console.log('Obrigado pela preferência, volte sempre!');

} else {
    alert('Fudeu Juliana, vou ter que vender o Corsa!')
}