const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const API = 'https://spotify81.p.rapidapi.com/top_200_tracks'
const btnBuscar = document.querySelector('#buscador')
let topTwoHundred = [];

document.addEventListener('DOMContentLoaded', () => {
  loadMusicData()
})

const loadMusicData = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '747be6c6e0msh7e2183218542cbbp1e4682jsncb33cbcc42c3',
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
      let artists = ''
      let size = song.trackMetadata.artists.length
      song.trackMetadata.artists.forEach((item, index) => {
        if (index === size-1){
          artists += item.name
        } else {
          artists += item.name + '/'
        }
      })
      cardTop.querySelector('.artistname').textContent = artists

      const clone = cardTop.cloneNode(true)
      fragment.appendChild(clone)
  })
  contenido.appendChild(fragment)
}

btnBuscar.addEventListener('input', (event) => {
  let searchedSong = event.target.value.toLowerCase()
  console.log(searchedSong)
  contenido.innerHTML = '' 
  let filteredSongs = topTwoHundred.filter((song) => {
    return song.trackMetadata.trackName.toLowerCase().includes(searchedSong)
  })
  console.log(filteredSongs)
  filteredSongs.forEach((song) => {
      cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
      cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
      let artists = ''
      let size = song.trackMetadata.artists.length
      song.trackMetadata.artists.forEach((item, index) => {
        if (index === size-1){
          artists += item.name
        } else{
          artists += item.name + '/'
        }
      })
      cardTop.querySelector('.artistname').textContent = artists

      const clone = cardTop.cloneNode(true)
      fragment.appendChild(clone)
  })
  contenido.appendChild(fragment)
})
