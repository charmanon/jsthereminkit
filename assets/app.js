function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const el = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return; //stops the function when there's no keycode returned
	audio.currentTime = 0; //rewinds to the beginning of audio
	audio.play();
	el.classList.add('playing');
	el.addEventListener('transitionend', function(event) {
		el.classList.remove('playing');
	});
}

window.addEventListener('keydown', playSound);
