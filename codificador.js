function codificarTexto(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

function decodificarTexto(texto) {
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}
function validarEntrada(texto) {
    var textoValidado = texto.replace(/[^a-zA-Z\s]/g, '');
    return textoValidado;
}

function codificar() {
    var inputText = document.getElementById('mensajeCodificar').value;
    var textoValidado = validarEntrada(inputText);
    var outputText = codificarTexto(textoValidado);
    document.getElementById('resultado').value = outputText;
    document.getElementById('resultadodemensaje').value = "";
}

function decodificar() {
    var inputText = document.getElementById('resultadodemensaje').value;
    var textoValidado = validarEntrada(inputText);
    var originalText = decodificarTexto(textoValidado);
    document.getElementById('resultado').value = originalText;
    document.getElementById('mensajeCodificar').value = "";
}
function copiarResultado() {
    var resultadoTextArea = document.getElementById('resultado');
    resultadoTextArea.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Texto copiado al portapapeles');
}