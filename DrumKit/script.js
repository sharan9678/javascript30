var audio = document.querySelectorAll("audio");
var keysContainer = document.querySelector(".keys");
var keyTags = keysContainer.querySelectorAll("div");

function playSound(e){
    Array.prototype.forEach.call(audio,function(audioTag){
        if (audioTag.getAttribute("data-key") == e.keyCode){
            audioTag.currentTime = 0;
            audioTag.play();
        }
    });
    
    Array.prototype.forEach.call(keyTags,function(keyTag){
        if (keyTag.getAttribute("data-key") == e.keyCode){
            keyTag.classList.add('playing');
        }
    });
  }
  function removeTransition(event){
    event.target.classList.remove('playing');
  }
  window.addEventListener("keydown", playSound);
  keysContainer.addEventListener("transitionend", removeTransition);