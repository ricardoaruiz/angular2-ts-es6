// Função no formato ES5
var dobroDoValor = function(numero) {
    return numero * 2;
}
console.log(dobroDoValor(7));

/**
 * Arrow function ES6 sem parâmetros, é necessário usar
 * os parênteses.
 */
var imprime = () => {
    return 'Imprimindo...';
}
console.log(imprime());

/**
 * Arrow function ES6, quando ela apenas retornar algo
 * pode-se omitir a palavra return e as chaves do corpo
 * da função.
 */
var imprime1 = () => 'Imprimindo1...';
console.log(imprime1());

/* Arrow function ES6 com nenhum ou com mais de um
   parâmetro é necessário a utilização dos parenteses. */
var dobroDoValorArrow1 = (numero, numero1) => {
    console.log(numero1);
    return numero * 2
}
console.log(dobroDoValorArrow1(7,5));

/* Arrow function ES6 com apenas um parâmetro não tem 
   necessidade de ter os parenteses dos parâmetros */
var dobroDoValorArrow2 = numero => {
    return numero * 2
}
console.log(dobroDoValorArrow2(7));

/**
 * Arrow function ES6, quando ela apenas retornar algo
 * pode-se omitir a palavra return e as chaves do corpo
 * da função.
 */
var dobroDoValorArrow3 = numero => numero * 2;
console.log(dobroDoValorArrow3(10));