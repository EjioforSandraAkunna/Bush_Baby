// Creating sound effect
var sfx = {
  push: new Howl({
    src: ["https://assets.codepen.io/21542/howler-push.mp3"],
  }),
  boost: new Howl({
    src: ["https://assets.codepen.io/21542/howler-sfx-levelup.mp3"],
    loop: false,
    onend: function () {
      console.log("Done playing sfx!");
    },
  }),
};
//Calling my chracter ID from HTML
var character = document.getElementById("character");
var dancingInterval;
//this function sets the chracters on motion
function startDance() {
  dancingInterval = setInterval(function () {
    character.style.animation = "dance 1s infinite";
  }, 1000);
}
//this function sets the chracters to stop

function stopDance() {
  clearInterval(dancingInterval);
  character.style.animation = "";
}

var music = {
  overworld: new Howl({
    src: ["https://assets.codepen.io/21542/howler-demo-bg-music.mp3"],
  }),
};

//Character class
class Character {
  constructor(element) {
    this.element = element;
  }

  push() {
    if (this.element.classList.contains("pushing")) {
      return;
    }

    sfx.push.play();
    this.element.classList.add("pushing");
    setTimeout(() => {
      this.element.classList.remove("pushing");
    }, 600);
  }

  boost() {
    if (this.element.classList.contains("walking is infinite")) {
      return;
    }

    sfx.boost.play();
    this.element.classList.add("walking");
    setTimeout(() => {
      this.element.classList.remove("walking is infinite");
    }, 1000);
  }
}
//Adding EventListeners to the buttons
//Init
(function () {
  var player = new Character(document.querySelector(".character"));

  document.querySelector(".button-a").addEventListener("click", () => {
    player.push();
  });
  document.querySelector(".button-b").addEventListener("click", () => {
    player.boost();
  });

  document.querySelector(".play-music").addEventListener("click", () => {
    if (!music.overworld.playing()) {
      music.overworld.play();
    }
  });
  document.querySelector(".stop-music").addEventListener("click", () => {
    music.overworld.pause();
  });
})();
