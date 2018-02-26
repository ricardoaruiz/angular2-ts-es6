/**
 * Type script utilizando arrow function (ES6) e 
 * tipagem de dados (TS).
 * 
 * Rodando o comando tsc app ele fará o transpile gerando
 * o arquivo app.js com o ES5
 */
let ola = (nome: string) => {
    console.log('Olá ' + nome);
}
ola('Ricardo');