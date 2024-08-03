// Função para manipular o evento de clique
function handleClick() {
    alert('Button clicked!');
}

// Função para manipular o evento de mouseover
function handleMouseOver() {
    document.getElementById('hoverBox').style.backgroundColor = 'lightgreen';
}

// Função para manipular o evento de mouseout
function handleMouseOut() {
    document.getElementById('hoverBox').style.backgroundColor = 'lightblue';
}

// Função para manipular o evento de keydown
function handleKeyDown(event) {
    console.log('Key down: ', event.key);
}

// Função para manipular o evento de keyup
function handleKeyUp(event) {
    console.log('Key up: ', event.key);
}

// Função para manipular o evento de change
function handleChange(event) {
    console.log('Selected: ', event.target.value);
}

// Adicionando event listeners aos elementos
document.getElementById('clickButton').onclick = handleClick;
document.getElementById('hoverBox').onmouseover = handleMouseOver;
document.getElementById('hoverBox').onmouseout = handleMouseOut;
document.getElementById('textInput').onkeydown = handleKeyDown;
document.getElementById('textInput').onkeyup = handleKeyUp;
document.getElementById('selectBox').onchange = handleChange;
