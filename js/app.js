let amigos = [];

function adicionar(){
    //Adicionando amigos
    let amigo = document.getElementById('nome-amigo');
    //Validação de nome vazio
    if(amigo.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!');
        return; 
    }

    let listaAmigos = document.getElementById('lista-amigos');

    //Adicionando amigo na lista de amigos
    amigos.push(amigo.value);
    //Se a lista está vazia adiciona o primeiro amigo, caso não ele adiciona mais um na lista com o anterior já inserido
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo.value;
    }else{
        listaAmigos.textContent =  listaAmigos.textContent + ', ' + amigo.value;
    }
    //Resetando o campo amigo após inserir um amigo na lista
    amigo.value = '';
}

function sortear(){
    //Validação se existem ao menos 4 pessoas para o sorteio
    if(amigos.length < 4){
        alert('Adicione ao menos 4 amigos!');
        return;
    }

    //Sorteando a lista de amigos
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    //Reinica a lista para sortear novos amigos
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}