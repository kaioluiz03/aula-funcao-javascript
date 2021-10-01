//1)Criar uma função para receber dois parâmetros: numero e percentual.
//a)Calcular a porcentagem de um número  usando a fórmula:
//b)Chamar a função e exibir o resultado no console.

var formula = (numero, precentual) => {
    let calculo = (numero/100) * precentual;
    return calculo;
}

console.log(formula(500, 2));

//2)Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
//a)Converter o array para string e retornar o resultado.
//b)Chamar a função e exibir o resultado no console.

var arraysEmStrings = (array1, array2) => {
    let concatenandoArrays = array1.concat(array2);
    let textoArrays = concatenandoArrays.toString();
    return(textoArrays);
}

console.log(arraysEmStrings([1,2,3,4], [5,6,7]));

