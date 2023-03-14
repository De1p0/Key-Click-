function playsound(file,volume) {
	var audio = new Audio(file);
	audio.volume = volume;
	audio.play();
}
let alreadyPlayed = false;
let alreadyPlayed2 = false;
document.addEventListener('keydown', function(a) {
    switch (a.keyCode){
	   case 8:
	   case 32:
		  if (alreadyPlayed2 == true){

		  } else {
		  alreadyPlayed2 = true;
	playsound('https://cdn.discordapp.com/attachments/1085331649555861507/1085333375763620010/mech-keyboard-02-102918.mp3', 0.3)
		  setTimeout(() => {
alreadyPlayed2 = false;
		  },100)
		  }
		  break;
	   default:
		  if (alreadyPlayed == true){

		  } else {
		  alreadyPlayed = true;
	playsound('https://cdn.discordapp.com/attachments/878026360759677032/1085284063952240650/audip.mp3', 0.2)
		  setTimeout(() => {
alreadyPlayed = false;
		  },50)
		  }
		  break;
    }
})
