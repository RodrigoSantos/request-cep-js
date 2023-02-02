async function buscarEndereco(cep){
    var mensagemErro = document.getElementById('erro');    
    mensagemErro.innerHTML = "";
    
    const url = `https://viacep.com.br/ws/${cep}/json/`   
    try{        
        //só posso usar o await se tiver async no bloco  
        var consultaCEP = await fetch(url);
        console.log(consultaCEP);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro

       
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!<p>`;
        console.log(erro)
    }
}
var cep = document.getElementById('cep')
cep.addEventListener("focusout",() => buscarEndereco(cep.value))

/*
Fazendo várias requisições
let ceps = ['01001000','01001001']  
let conjuntoCeps =  ceps.map(valores => buscarEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)); */



//Ourtra maneira de fazer está consulta
/*var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')


    .then(resposta => resposta.json())
    .then(r => {        
        if (r.erro){            
            throw Error('Esse CEP não existe!')
        } else            
            console.log(r)
    })
    
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído!'));
console.log(consultaCEP);*/
