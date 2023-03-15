function playsound($,_) {
	var audio = new Audio($);
	audio.volume = _;
	audio.play();
};



let key_1_held = false;
let key_2_held = false;


document.addEventListener('keyup', function(u){
     switch (u.code) {
          case 'Backspace':
          case 'Space':

               key_1_held = false;
               break;
     case 'KeyD':
     case 'KeyS':
     case 'KeyA':
     case 'KeyW':
          key_2_held = false;
	   break;
    default:
          key_2_held = false;
	   break

}
})
document.addEventListener('keydown', function(a) {
     switch (a.code) {
     case 'Backspace':
          case 'Space':
               if (key_1_held == false) {
                    playsound('https://cdn.discordapp.com/attachments/1085331649555861507/1085333375763620010/mech-keyboard-02-102918.mp3', 0.3) 
               }
               key_1_held = true;
               break;
         case 'KeyD':
         case 'KeyS':
         case 'KeyA':
         case 'KeyW':
              if (key_2_held == false) {
                   playsound('https://cdn.discordapp.com/attachments/878026360759677032/1085284063952240650/audip.mp3', 0.2) 
                   key_2_held = true
              } else {
                   console.log("test")
              }
              break;
         default:
              if (key_2_held == false) {
                   playsound('https://cdn.discordapp.com/attachments/878026360759677032/1085284063952240650/audip.mp3', 0.2) 
              }
              key_2_held = true;
		  break;
    }
})


// dont skid my code LMAO
