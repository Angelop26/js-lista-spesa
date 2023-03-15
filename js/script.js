const ul = document.querySelector('ul')
let listaSpesa = ''
i = 0
while (i < 10) {
    const elem = prompt('dimmi cosa aggiungere alla lista della spesa')
    listaSpesa += `<li>${elem}</li>`
    i++
}

ul.innerHTML = listaSpesa
