const video = document.querySelector('#video__1')
const playButton = document.querySelector('.play-button')

playButton.addEventListener(
	'click',
	() => {
		video.play()
		playButton.style.display = 'none'
		video.controls = true
	},
	false
)
