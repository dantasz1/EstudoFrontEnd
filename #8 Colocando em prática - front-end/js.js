
document.getElementById('form').addEventListener('submit', (event) => {
    const form = event.currentTarget
    const data = {
        nome: form.nome.value,
        endereco: form.endereco.value,
        diasDaSemana: form.diasDaSemana.value,
        abertura: form.abertura.value,
        fechamento: form.fechamento.value

    }

    //===========================================
    console.log("Preparando envio")
    form.campos.disabled = true
    window.localStorage.setItem('dados', JSON.stringify(data))
})

window.onload = () => {
    const form = document.getElementById('form')
    let data = window.localStorage.getItem('dados')
    if ( data) {
        data = JSON.parse(data)
        form.nome.value = data.nome
        form.endereco.value = data.endereco
        form.diasDaSemana.value = data.diasDaSemana,
       form.abertura.value =  data.abertura,
       form.fechamento.value = data.fechamento
    }
}
