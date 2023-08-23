/*********************************************************
 Objetivo: Criar uma calculadora que realiza 4 operações matemáticas
 Data: 09/08/2023
 Autor: Estela Alves de Moraes
 Versão: 1.0
**********************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
   input: process.stdin ,
   output: process.stdout
})

console.log('')
console.log('+-----------')
console.log('|Calculadora')
console.log('+-----------')
console.log('')
console.log('Digite os valores: ')

entradaDados.question('Valor 1: ', function (valorUm){

    let valor1 = valorUm.replace(',', '.')

    if(valor1 == '' || isNaN(valor1)){
        console.log('>> ERRO: O valor deve ser um número.')
        entradaDados.close()
    } else{

        entradaDados.question('Valor 2: ', function(valorDois){

            let valor2 = valorDois.replace(',', '.')
            if(valor2 == '' || isNaN(valor2)){
                console.log('>> ERRO: O valor deve ser um número.')
                entradaDados.close()
            }else{
            console.log('')
            console.log('1) Soma | 2) Subtração | 3) Multiplicação | 4) Divisão ')
        entradaDados.question ('Escolha o número correspondente à operação: ', function(operacoes){
    
            let operacao = operacoes
            let sinal
            let resultado
    
            if(operacao == 1){
                resultado = Number(valor1)+Number(valor2)
                sinal = '+'
            }else if(operacao == 2){
                resultado = Number(valor1)-Number(valor2)
                sinal = '-'
            }else if(operacao == 3){
                resultado = Number(valor1)*Number(valor2)
                sinal = '*'
            }else if(operacao == 4){
                resultado = Number(valor1)/Number(valor2)
                sinal = '/'
            }
            
            if( operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4) {
                console.log('>> ERRO: Isso não corresponde à nenhuma operação.')
                entradaDados.close()
        }else if(operacao == 4 && valor2 == 0){
            console.log('>. Erro: Não é possível dividir por 0')
            entradaDados.close()
        }else{

            entradaDados.question('Quantidade de casas decimais no resultado: ', function(casasDecimais){

                casas = casasDecimais
                console.log( String(valor1).replace('.', ',') + ' ' + sinal + ' ' + String(valor2).replace('.', ',') + '  =  ' + String(resultado.toFixed(casas)).replace('.', ','))
                entradaDados.close()
            })


        }
            

        })
    }

    })
            }

})