function passarTextoTempoReal(params) {
    const textInputReal = document.getElementById('textInputReal')
    const textAreaReal = document.getElementById('textAreaReal')
    textAreaReal.value = textInputReal.value
    console.log('obaaaa')
    setInterval(passarTextoTempoReal, 100)
}
passarTextoTempoReal()