//1)Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
//a)Ordenar os elementos do array na ordem invertida

let estadosNorte = () => {
    let estados = ["Amazonas", "Rondônia", "Acre"];
    estados.reverse();
    return(estados);
}

console.log(estadosNorte());

//2)Criar uma função que recebe duas strings:
//a)Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
//b)Concatenar as duas strings e retornar o resultado.
//c)Chamar a função e exibir no console o resultado.

let fucaoStrigs = (str1, str2) => {
    let parametro1 = str1.toUpperCase(str1);
    let juntandoStrigs = parametro1.concat(str2);
    return (juntandoStrigs);
}

console.log(fucaoStrigs('kaio','luiz'));

//3)Criar uma função que retorne 17 vezes a palavra Repetição.
//a)Chamar a função e exibir no console o resultado.

let repeticao = () => {
    let palavra = 'Repetição';
    return (palavra.repeat(17));
}

console.log(repeticao());