//1)Criar uma função para receber  uma string como parâmetro:
//a)Contar a quantidade de palavras repetidas em uma frase e retornar o total.
//b)Chamar a função e exibir o resultado no console.

let contarPalavras = (frase) => {
    let contagem = 0;
    let fraseArray = frase.split(' ');

    for (let i = 0; i < fraseArray.length; i++){
        if (fraseArray[i] == 'sabia'){
            contagem += 1;
        }
    }
    return contagem;
}

console.log(contarPalavras('O sabiá não sabia que o sábio sabia que o sabiá não sabia assobiar.'));

//2)Criar uma função que receba um array com 5 números como parâmetros:
//a)Inverter o array e retornar o resultado.
//b)Chamar a função e exibir o resultado no console.

let inversaoArray = (parametroArray) => {
    let invertido = parametroArray.reverse();
    return invertido;
}   

console.log(inversaoArray([10,33,12,81,75]));

//3)Criar uma função que receba 4 números inteiros positivos como parâmetros:
//a)Calcular a soma de todos os números.
//b)Retornar o Resultado.
//c)Chamar a função e exibir o resultado no console.

let soma = (pm1,pm2,pm3,pm4) => {
    let somaTodos;

    if((pm1 > 0 && pm2 > 0 && pm3 > 0 && pm4 > 0)) {

        if(Number.isInteger(pm1,pm2,pm3,pm4)){

            somaTodos = pm1 + pm2 + pm3 + pm4;
            return somaTodos;
        }
    }
}

console.log(soma(1,2,6,2));