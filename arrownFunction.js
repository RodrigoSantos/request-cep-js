//function sum(number1,numer2){
//   return number1+numer2
//}
//Mesma Função usando arrow function

//const sum = (number1,number2) => {
//    return number1 + number2
//}

//Função anonima
const sum = function(number1,number2){
    return number1 + number2
}
//sem os bigode não precisa do return
//const sum = (number1,number2) => number1 + number2

// funcção sem parametro
//const comunity =() => {
//    return 'CollabCode'
//}
//const double = (number) => number * 2;
const double = number => number * 2;

const comunity =() => 'CollabCode'

console.log(comunity)
console.log(sum(20,20))
//retornar um Json
const getPerson = () => { // ou ou const getPerson = () => ({ name: "Henri"})
    return { name: "Henri"}
}
console.log(getPerson())

/*Para garantir que minha função seja executada somente no meu arquivo e não em ambito global usasse 
function init assim pode existir esse mesmo nome de função em outros arquivos, ajuda a não vazar o escopo do arquivo*/
function init(){
    const getPerson = () => ({ name: "Henri"})
    console.log(getPerson())
}
init();
/*Criar uma função que só permitirar ser executada uma unica vez no seu escopo, 
desta forma evita com que as pessoas possam executar este recurso fora do código*/
(function (){
    const getPerson = () => ({ name: "Henri"})
    console.log(getPerson())
})();

/* IIFE usando Errow function
(()=>{
    const getPerson = () => ({ name: "Henri"})
    console.log(getPerson())
})();
*/

/*=======================================*/
// Usando o This
(() =>{
    function Person(){//Comoo this é global vamos salvar ele dentro de uma variavel ai im será possivel incrmentar
        const that = this
        that.year = 0;

        setInterval(function(){
            that.year +=1;
            console.log('Qual that?', that)
            console.log('Qual é a idade?', that.year)
        },1000)
    }

    const p1 = new Person()    
})()
/* //Usando Arrow Function 

// Usando o This
(() =>{
    function Person(){//Comoo this é global vamos salvar ele dentro de uma variavel ai im será possivel incrmentar
        this.year = 0;

        setInterval(()=>{
            this.year +=1;
            console.log('Qual this?', this)
            console.log('Qual é a idade?', this.year)
        },1000)
    }

    const p1 = new Person()    
})()

*/