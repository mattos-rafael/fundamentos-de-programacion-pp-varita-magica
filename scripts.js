const colors = ['red', 'blue', 'green']
const randomImg = [
  "./assets/magic-1.gif",
  "./assets/magic-2.gif",
  "./assets/magic-3.gif",
  "./assets/magic-5.gif",
  "./assets/magic-6.gif"
]

//Ejercicio 1
const anchor = document.querySelectorAll('a')
for (const anch of anchor) {
  anch.addEventListener('click', (event)=>{
    event.preventDefault()
  })
}

//Ejercicio 2
const imagenes = document.querySelectorAll('img')
const parrafos = document.querySelectorAll('p')
const artSect = document.querySelectorAll('article', 'section')

for (const img of imagenes){
  img.addEventListener("click", () => {
    img.src = `${getRandom(randomImg)}`
  })
}

for (const p of parrafos){
  p.addEventListener("click", () => {
    p.style.color = "red"
    p.style.backgroundColor = "yellow"
  })
}

for (const articSection of artSect){
  articSection.addEventListener("click", () => {
  articSection.style.backgroundColor = "green"
  })
}

//Ejercicio 3

for (const p of parrafos) {
  p.addEventListener('mouseover', ()=>{
    p.style.color = 'yellow'
    p.style.backgroundColor = 'red'
})
  p.addEventListener('mouseout', ()=>{
    p.style.color = 'black'
    p.style.backgroundColor = 'white'
})
}

for (const img of imagenes) {
  let aux =  img.src
  img.addEventListener('mouseover', ()=>{
    img.src = './assets/abracadabra.gif'
  })
  img.addEventListener('mouseout', ()=>{
    img.src = aux
  })
  
}

for (const art of artSect) {
  art.addEventListener('mouseover', ()=>{
    art.style.color = `${getRandom(colors)}`
    art.style.backgroundColor = `${getRandom(colors)}`
  })
  art.addEventListener('mouseout', ()=>{
    art.style.color = 'black'
    art.style.backgroundColor = 'white'
  })
}


//Ejercicio 4 (Antonio)


function getRandom(colors){
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

console.log(getRandom(colors))

//Ejercicio 5

//Ejercicio 6 (Antonio)
