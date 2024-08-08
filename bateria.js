let botao = document.querySelector('.botao')


function tocar(event){


let letraClicada = event.key.toUpperCase()


if (event.key === 'q' ||event.key==='Q'){
 audio.innerHTML = `<audio src="audios/keyq.wav" id="audio"></audio>`

let rodar = document.getElementById('audio')


mudarBorda(letraClicada);
setTimeout(()=> voltarBorda(letraClicada),300)




rodar.play()

} else if (event.key === 'w' ||event.key==='W'){
        audio.innerHTML = `<audio src="audios/keyw.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       mudarBorda(letraClicada);
setTimeout(()=> voltarBorda(letraClicada),300)

       
       rodar.play()
       
       } else if (event.key === 'e' ||event.key==='E'){
        audio.innerHTML = `<audio src="audios/keye.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       
       mudarBorda(letraClicada);
       setTimeout(()=> voltarBorda(letraClicada),300)

       rodar.play()
       
       } else if (event.key === 'a' ||event.key==='A'){
        audio.innerHTML = `<audio src="audios/keya.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       
       mudarBorda(letraClicada);
setTimeout(()=> voltarBorda(letraClicada),300)

       rodar.play()
       
       } else if (event.key === 's' ||event.key==='S'){
        audio.innerHTML = `<audio src="audios/keys.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       
    
       mudarBorda(letraClicada);
       setTimeout(()=> voltarBorda(letraClicada),300)
       rodar.play()
       
       } else if (event.key === 'd' ||event.key==='D'){
        audio.innerHTML = `<audio src="audios/keyd.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       
       mudarBorda(letraClicada);
       setTimeout(()=> voltarBorda(letraClicada),300)
       rodar.play()
       
       } else if (event.key === 'z' ||event.key==='Z'){
        audio.innerHTML = `<audio src="audios/keyz.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       mudarBorda(letraClicada);
setTimeout(()=> voltarBorda(letraClicada),300)
       rodar.play()
       
       } else if (event.key === 'x' ||event.key==='X'){
        audio.innerHTML = `<audio src="audios/keyx.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       mudarBorda(letraClicada);
setTimeout(()=> voltarBorda(letraClicada),300)

       rodar.play()
       
       } else if (event.key === 'c' ||event.key==='C'){
        audio.innerHTML = `<audio src="audios/keyc.wav" id="audio"></audio>`
       
       let rodar = document.getElementById('audio')
       
       mudarBorda(letraClicada);
       setTimeout(()=> voltarBorda(letraClicada),300)
       rodar.play()
       
       }
}

function mudarBorda(key){

    let botao = document.querySelector(`#botao${key}`)

    if (botao){
    botao.style.borderColor = 'orange';
    }

    

    



}

function voltarBorda(key){


    let botao = document.querySelector(`#botao${key}`)
if (botao){
    botao.style.borderColor = 'white';
}


}




    




















let audio = document.querySelector('#som')

let corpo = document.querySelector('body').addEventListener('keydown',tocar)

let teclaQ = document.querySelector('#botaoQ')
let teclaW = document.querySelector('#botaoW')
let teclaE = document.querySelector('#botaoE')
let teclaA = document.querySelector('#botaoA')
let teclaS = document.querySelector('#botaoS')
let teclaD = document.querySelector('#botaoD')
let teclaZ = document.querySelector('#botaoZ')
let teclaX = document.querySelector('#botaoX')
let teclaC = document.querySelector('#botaoC')