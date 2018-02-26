// Variável global "var"
var serie = 'Friends';

/* Declaração de uma constante que fica contida no escopo onde
   foi declarada sem que haja elevação. */
const serie1 = 'The Walking Dead';

if(true) {
    /* Em se declarando a variável dentro do escopo do if com var
       ela sofre uma elevação fazendo com que se torne global.
       Para que a variável seja local, utilizamos a declaração com
       let (ES6).*/
    
    //var serie2 = 'Game Of Thrones';
    let serie = 'Game Of Thrones';
    console.log(serie);
}

console.log(serie);