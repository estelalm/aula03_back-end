/*********************************************************
 Objetivo: Criar uma calculadora que realiza 4 operações matemáticas
 Data: 09/08/2023
 Autor: Estela Alves de Moraes
 Versão: 1.0
**********************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log('+-----------')
console.log('|Calculadora')
console.log('+-----------')
console.log('')
console.log('Digite os valores: ')

entradaDados.question('Valor 1: ', function (valorUm) {

    let valor1 = valorUm.replace(',', '.')

    if (valor1 == '' || isNaN(valor1)) {
        console.log('>> ERRO: O valor deve ser um número.')
        entradaDados.close()
    } else {

        entradaDados.question('Valor 2: ', function (valorDois) {

            let valor2 = valorDois.replace(',', '.')
            if (valor2 == '' || isNaN(valor2)) {
                console.log('>> ERRO: O valor deve ser um número.')
                entradaDados.close()
            } else {
                console.log('')
                console.log('1) Soma | 2) Subtração | 3) Multiplicação | 4) Divisão ')
                entradaDados.question('Escolha o número correspondente à operação: ', function (operacoes) {

                    let operacao = operacoes
                    let resultado

                    valor1 = Number(valor1)
                    valor2 = Number(valor2)

                    //     if(operacao == 1){
                    //         resultado = valor1+valor2
                    //         sinal = '+'
                    //     }else if(operacao == 2){
                    //         resultado = valor1-valor2
                    //         sinal = '-'
                    //     }else if(operacao == 3){
                    //         resultado = valor1*valor2
                    //         sinal = '*'
                    //     }else if(operacao == 4){
                    //         resultado = valor1/valor2
                    //         sinal = '/'
                    //     } 
                    //     if( operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4) {
                    //         console.log('>> ERRO: Isso não corresponde à nenhuma operação.')
                    //         entradaDados.close()
                    // }else if(operacao == 4 && valor2 == 0){
                    //     console.log('>. Erro: Não é possível dividir por 0')
                    //     entradaDados.close()
                    // }else{
                    //      entradaDados.question('Quantidade de casas decimais no resultado: ', function(casasDecimais){
                    //         casas = casasDecimais
                    //         console.log( String(valor1).replace('.', ',') + ' ' + sinal + ' ' + String(valor2).replace('.', ',') + '  =  ' + String(resultado.toFixed(casas)).replace('.', ','))
                    //         entradaDados.close()
                    //     })
                    // if (sinal != undefined) {
                    //     entradaDados.question('Quantidade de casas decimais no resultado: ', function (casasDecimais) {
                    //         casas = casasDecimais
                    //         console.log(String(valor1).replace('.', ',') + ' ' + sinal + ' ' + String(valor2).replace('.', ',') + '  =  ' + String(resultado.toFixed(casas)).replace('.', ','))
                    //         entradaDados.close()
                    //     })


                    //Versão 2.0 Switch



                    resultado = calculadora(valor1, valor2, operacao)
                    if(resultado)
                    console.log('O resultado é: ' + resultado)

        })

            }
        })

    }
    })


//função para cálculo - com switch
function calculadora (numero1, numero2, operacoes){

    let operacao = operacoes
    let valor1 = numero1
    let valor2 = numero2
    let resultado

    switch (operacao) {
        case '1':
            resultado = valor1 + valor2
            break
        case '2':
            resultado = valor1 - valor2
            break
        case '3':
            resultado = valor1 * valor2
            break
        case '4':
            if (operacao == 4 && valor2 == 0) {
                console.log('>. Erro: Não é possível dividir por 0')
                entradaDados.close()
            } else {
                resultado = valor1 / valor2
            }
            break
        default:
            console.log('>> ERRO: Isso não corresponde à nenhuma operação.')
            entradaDados.close()
            break
    }

    if (resultado != undefined)
    return resultado.toFixed(2)
    else
    return false
}
