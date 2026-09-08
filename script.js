const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next-button");


function showScreen(screenId) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
    }
}


/* NEXT BUTTONS */

nextButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const nextScreen = button.dataset.next;

        showScreen(nextScreen);

        if (nextScreen === "birthday") {
    bgMusic.play().catch(function(error) {
        console.log("Music waiting:", error);
    });
}

    });

});

/* BIRTHDAY */

const birthdayStep1 = document.getElementById("birthdayStep1");
const birthdayStep2 = document.getElementById("birthdayStep2");
const birthdayStep3 = document.getElementById("birthdayStep3");

const birthdayRevealButton =
    document.getElementById("birthdayRevealButton");

const birthdayMoreButton =
    document.getElementById("birthdayMoreButton");


function showBirthdayStep(step) {

    birthdayStep1.classList.remove("active");
    birthdayStep2.classList.remove("active");
    birthdayStep3.classList.remove("active");

    step.classList.add("active");
}


birthdayRevealButton.addEventListener("click", function() {

    showBirthdayStep(birthdayStep2);

});


birthdayMoreButton.addEventListener("click", function() {

    showBirthdayStep(birthdayStep3);

});


/* GIFT */

const giftWrapper =
    document.getElementById("giftWrapper");

const giftMessage =
    document.getElementById("giftMessage");

const giftHint =
    document.getElementById("giftHint");


giftWrapper.addEventListener("click", function() {

    giftWrapper.classList.add("open");

    giftHint.style.display = "none";

    setTimeout(function() {

        giftMessage.classList.add("show");

    }, 700);

});


/* DATE */

const acceptButton =
    document.getElementById("acceptButton");

const acceptedMessage =
    document.getElementById("acceptedMessage");


acceptButton.addEventListener("click", function() {

    acceptButton.innerText =
        "IT'S A DATE! ☕♡";

    acceptButton.disabled = true;

    acceptedMessage.innerText =
        "YAAAY! See you on October 9! 🥹";

    setTimeout(function() {

        showScreen("final");

    }, 1800);

});

/* =========================================
   BACKGROUND MUSIC
========================================= */

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

bgMusic.volume = 0.35;

let musicPlaying = false;


/* START MUSIC */

function startMusic() {

    if (!musicPlaying) {

        bgMusic.play()
            .then(function() {

                musicPlaying = true;

                musicButton.innerText = "♫ Music On";

            })
            .catch(function(error) {

                console.log("Music could not start:", error);

            });

    }

}


/* MUSIC BUTTON */

musicButton.addEventListener("click", function() {

    if (musicPlaying) {

        bgMusic.pause();

        musicPlaying = false;

        musicButton.innerText = "♫ Music Off";

    } else {

        bgMusic.play();

        musicPlaying = true;

        musicButton.innerText = "♫ Music On";

    }

});
