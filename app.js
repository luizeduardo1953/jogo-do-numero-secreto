let listaDeNumerosSorteados = []; //criando uma lista para todos os números sorteados
let numeroLimite = 10; //numero limite de numeros  que serão gerados e inseridos na lista
let numeroSecreto = gerarNumeroAleatorio(); //numero secreto que será gerado pelo metodo random
let tentativas = 1; //contador de quantas vezes o usuario tentou

function exibirTextoNaTela(tag, texto){ //criando a funcao para exibir na tela na teg selecionada e um texto
    let campo =  document.querySelector(tag); //
    campo.innerHTML = texto; //escrevendo no html
}

function exibirMensagemInicial(){ //criando a funcao para exibir a mensagem inicial ao iniciar o jogo
    exibirTextoNaTela('h1', 'Jogo do número secreto'); //passando os parametros e chamando a função exibirTextoNaTela
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); //passando os parametros e chamando a função exibirTextoNaTela
}

exibirMensagemInicial(); //chamando a funcao

function verificarChute(){ //funcao para verificar as tentativas do usuário
    let chute = document.querySelector('input').value //pegando o valor do campo input atrávez do value
    if(chute > numeroLimite){ //verificando se o chute é maior que o numero limite
        alert("Digite um número de 1 a 10!"); //se for maior o alert é ativado
    }
    if(chute == numeroSecreto){ //verificando se o chute é igual ao numero secreto
        exibirTextoNaTela('h1', 'Você acertou!'); //se for, chama a funcao para exibir o texto na h1
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //variavel para alterar  a frase conforme as tentativas
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; //a mensagem mostrada quando acertar
        exibirTextoNaTela('p', mensagemTentativas); //chamando a funcao e na tag p a mansagem
        document.getElementById('reiniciar').removeAttribute ('disabled'); //desativando o atributo que está no html inativando o botão com id reiniciar

    }else{  //caso o chute for incorreto
        if(chute > numeroSecreto){ //verifica se foi maior ou menor que o numero  secreto
            exibirTextoNaTela('p', 'o seu número é maior!'); //exibe na tela 
        }else{
            exibirTextoNaTela('p','O seu número é menor!'); //exibe na tela
        }
        tentativas++; //adiciona  mais uma tentativa ao contador tentativas =  tentativas + 1;
        limparCampo(); //chamando a função para limpar o campo
        }
}
        
    
    

function gerarNumeroAleatorio(){ //criando uma funcao para gerar um numero aleatorio
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);//gerando um numero aleatorio e sendo  multiplicado por o limite e adicionado mais 1
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length; //atribuindo a quantidade de elementos dentro da lista
    
    if(quantidadeElementosNaLista == numeroLimite){ //verifica se a quantidade de elementos na lista é igual ao numero limite 
        listaDeNumerosSorteados = []; //se for a lista é limpar
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //verificando se o numero está na lista
        return gerarNumeroAleatorio(); //chamando a propria função
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido); //adicionando o numero ao final da lista
        //console.log(listaDeNumerosSorteados) //vendo no console se está limpando a lista
        return numeroEscolhido; //retornando o numero escolhido
    }
}

function limparCampo(){ //funcao para limpar o campo input quando chutar um numero
    chute = document.querySelector('input'); //pegando o campo input
    chute.value = ""; //atribuindo a ele o valor vazio
}

function reiniciarJogo(){ //criando uma função para reiniciar o jogo
    numeroSecreto = gerarNumeroAleatorio(); //quando selecionar o botao novo jogo essa função sera carregada
    limparCampo(); //juntamento com essas outras
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reinicia').setAttribute ('disabled', true); //atribuindo ao campo reinicia  o atributo disabled para iniciar desabilitado
    
}