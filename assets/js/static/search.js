function search() {
    const input = document.querySelector('.inputsearch').value
    const produtos = document.querySelectorAll('.nome')

    for (let i = 0; i < produtos.length; i++) {
        const element = produtos[i];
        const convertelement = element.textContent
        
        if (input.toLowerCase() != convertelement.toLowerCase()) {
            if (i == produtos.length - 1) {
                console.log('Produto Não Encontrado')
            } else {
                continue
            }
        } else {
            console.log(`Produto Encontrado ${convertelement}`)
            break
        }
    }
}