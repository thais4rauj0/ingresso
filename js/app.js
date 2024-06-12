let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
function comprar(){
    let listaIngresso = document.getElementById('tipo-ingresso');
    let tipoIngresso = listaIngresso.options[listaIngresso.selectedIndex].text;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso=='Cadeira inferior' && quantidade>qtdInferior){
        alert('A quantidade informada é maior que a de ingressos disponíveis!')
    }else if(tipoIngresso=='Cadeira superior' && quantidade>qtdSuperior){
        alert('A quantidade informada é maior que a de ingressos disponíveis!')
    }else if(tipoIngresso=='Pista' && quantidade>qtdPista){
        alert('A quantidade informada é maior que a de ingressos disponíveis!')
    }

    if(quantidade<=0){
        alert('informe um valor maior que zero!')
    }

    if(tipoIngresso == 'Pista' && qtdPista>=0 && quantidade>0 && quantidade<=qtdPista){
        qtdPista = qtdPista-quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;   
    }else if(tipoIngresso == 'Cadeira inferior' && qtdInferior>=0 && quantidade>0 && quantidade<=qtdInferior){
            qtdInferior = qtdInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = qtdInferior;   
    }else if(tipoIngresso == 'Cadeira superior' && quantidade>0 && qtdSuperior>=0 && quantidade<=qtdSuperior){
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;   
    }
}