// codificador de texto inicial

const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')
const textoSaida = document.querySelector('.texto-saida')
const btnCopiar = document.querySelector('#btnCopiar ')


function btnCodificar() {

    const textoCodificado = codificar(inputTexto.value)

    if(textoCodificado == "") {

        alert("Você precisa digitar um texto para codificar")

        return textoCodificado

    }
    mensagem.value = textoCodificado
    btnCopiar.style.display='block'
    mensagem.style.background="#FFFAFA"
    textoSaida.style.display='none'
 
}

function codificar(stringCodificada) {

    let matrizTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
        console.table(matrizTexto)
        // stringCodificada = stringCodificada.tolowerCase();

    for (let i = 0; i < matrizTexto.length; i++) {

        if(stringCodificada.includes(matrizTexto[i][0])) {

            stringCodificada = stringCodificada.replaceAll(matrizTexto[i][0], matrizTexto[i][1])
        }
    }
    
    return stringCodificada
    
}

function btnDecodificar() {

    const textDecodificado = decodificar(mensagem.value)

    if(textDecodificado == "") {
 
        alert("Digite o texto que deseja Decodificar")

        return textDecodificado
    }

    mensagem.value = textDecodificado
    mensagem.style.color='#red'
    mensagem.style.fontSize='30px'
   
}

function decodificar(stringDecodificar) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    console.table(matrizCodigo)
    for ( let contador = 0; contador < matrizCodigo.length; contador++) {

        if(stringDecodificar.includes(matrizCodigo[contador][1])) {
        
            stringDecodificar = stringDecodificar.replaceAll(matrizCodigo[contador][1], matrizCodigo[contador][0])
        
        }
    }
    return stringDecodificar
}

function copiar() {

    let conteudoCopiar = mensagem
    conteudoCopiar.select()
    document.execCommand('copy')
    alert('Conteúdo Copiado!')
    alert('Use o Ctrl + v, para colar onde você desejar')

}


