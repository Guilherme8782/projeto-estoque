function somaentradas() {
    const entradasnum = document.querySelectorAll('.entrada')
    let sum = 0

    for (let i = 0; i < entradasnum.length; i++) {
        const element = entradasnum[i];
        const convert = Number(element.textContent.slice(10))
        sum += convert;
    }
    
    const resultado = document.querySelector('ol.content3 li');
    resultado.innerHTML = sum 
}

function somasaidas() {
    const saidasnum = document.querySelectorAll('.saida')
    let sum = 0

    for (let i = 0; i < saidasnum.length; i++) {
        const element = saidasnum[i];
        const convert = Number(element.textContent.slice(8))
        sum += convert;
    }
    
    const resultado = document.querySelector('ol.content4 li');
    resultado.innerHTML = sum 
}

function totalestoque() {
    const saidasnum = document.querySelectorAll('.saida')
    const entradasnum = document.querySelectorAll('.entrada')
    let sumsaida = 0
    let sumentr = 0

    for (let i = 0; i < saidasnum.length; i++) {
        const element = saidasnum[i];
        const convert = Number(element.textContent.slice(8))
        sumsaida += convert;
    }

    for (let i = 0; i < entradasnum.length; i++) {
        const element = entradasnum[i];
        const convert = Number(element.textContent.slice(10))
        sumentr += convert;
    }
    
    const conta = sumentr - sumsaida
    const resultado = document.querySelector('ol.content1 li');
    resultado.innerHTML = conta 
}

function quantidade() {
    const quantidade = document.querySelectorAll('.quantidade');
    const preço = document.querySelectorAll('.preço');
    let sumquant = 0;
    let sumpreco = 0;

    for (let i = 0; i < quantidade.length; i++) {
        const element = quantidade[i];
        const convert = Number(element.textContent.slice(12))
        sumquant += convert;
    }

    for (let i = 0; i < preço.length; i++) {
        const element = preço[i];
        const convert = Number(element.textContent.slice(10))
        sumpreco += convert;
    }

    const conta = sumquant * sumpreco
    const resultado = document.querySelector('ol.content2 li')
    resultado.innerHTML = 'R$ ' + conta
}