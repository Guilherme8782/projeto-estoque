const entradasnum = document.querySelectorAll('.entrada')
const saidasnum = document.querySelectorAll('.saida')

function somaentradas() {
    const teste = entradasnum.forEach((element) => {
        const convert = element.textContent
        const onlynum = convert.slice(10)
        var convertnum = Number(onlynum)
    })
}
