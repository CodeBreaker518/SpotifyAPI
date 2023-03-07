const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const API = 'https://spotify81.p.rapidapi.com/top_200_tracks'
let topTwoHundred = [];

document.addEventListener('DOMContentLoaded', () => {
  loadMusicData()
})

const loadMusicData = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4d425b0d96mshbed6647e5305b91p14d902jsn73e2a1a73e94',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  }
  fetch(API, options)
    .then(response => response.json())
    .then(response => {
      topTwoHundred = response
      console.log('Canciones', topTwoHundred)
      creaCards()
    })
    .catch(err => console.error(err))
}

const creaCards = () => {
    topTwoHundred.forEach((song) => {
      cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
      cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
      const clone = cardTop.cloneNode(true)
      fragment.appendChild(clone)
  })
  contenido.appendChild(fragment)
}