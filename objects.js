var playlist = {
  Artist Name: "Song Title"
}

function updatePlaylist(obj, artist, song) {
  return Object.assign(obj, {[artist]: song} )
}

function removeFromPlaylist(obj, artist) {
  delete obj.artist;
  return obj
}