btnBuscar.addEventListener('input', (event) => {
  let searchedSong = event.target.value
  console.log(searchedSong)
  contenido.innerHTML = '' 
  let filteredSongs = topTwoHundred.filter((song) => {
    return song.trackMetadata.trackName.includes(searchedSong)
  })
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
})