var numberOfDumButton = document.querySelectorAll(".drum").length;
//clicked
for (var i = 0; i < numberOfDumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        var buttonName = this.innerHTML;
        makeSound(buttonName);
        buttonAnimation(buttonName);
    });

}

//keypressed

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {

        case "w": var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;
        case "a": var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;
        case "s": var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play()
            break;
        case "d": var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;
        case "j": var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k": var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l": var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default: console.log(buttonName);
    }

}


// <------Animation------->

function buttonAnimation(curKey) {
    var activeButton = document.querySelector("." + curKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);

}