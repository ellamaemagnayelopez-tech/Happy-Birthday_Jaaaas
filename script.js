```javascript
/* =========================
   SCREEN NAVIGATION
========================= */

const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next-button");

function showScreen(screenId) {
    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");

        // Reset scroll position when opening a new screen
        const scrollable = target.querySelector(
            ".memories-content, .letter"
        );

        if (scrollable) {
            scrollable.scrollTop = 0;
        }
    }
}

nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const nextScreen = button.dataset.next;

        showScreen(nextScreen);

        // Start music after user interaction
        if (nextScreen === "birthday") {
            startMusic();
        }
    });
});


/* =========================
   BIRTHDAY
========================= */

const birthdayStep1 =
    document.getElementById("birthdayStep1");

const birthdayStep2 =
    document.getElementById("birthdayStep2");

const birthdayStep3 =
    document.getElementById("birthdayStep3");

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

    createConfetti();
});


birthdayMoreButton.addEventListener("click", function() {

    showBirthdayStep(birthdayStep3);

});


/* =========================
   GIFT
========================= */

const giftWrapper =
    document.getElementById("giftWrapper");

const giftMessage =
    document.getElementById("giftMessage");

const giftHint =
    document.getElementById("giftHint");


giftWrapper.addEventListener("click", function() {

    if (giftWrapper.classList.contains("open")) {
        return;
    }

    giftWrapper.classList.add("open");

    giftHint.style.display = "none";

    setTimeout(function() {

        giftMessage.classList.add("show");

    }, 700);

});


/* =========================
   DATE
========================= */

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


/* =========================
   BACKGROUND MUSIC
========================= */

const bgMusic =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

let musicPlaying = false;

bgMusic.volume = 0.35;


function startMusic() {

    if (musicPlaying) {
        return;
    }

    bgMusic.play()
        .then(function() {

            musicPlaying = true;

            musicButton.innerText =
                "♫ Music On";

        })
        .catch(function(error) {

            console.log(
                "Music waiting for user interaction:",
                error
            );

        });
}


musicButton.addEventListener("click", function() {

    if (musicPlaying) {

        bgMusic.pause();

        musicPlaying = false;

        musicButton.innerText =
            "♫ Music Off";

    } else {

        bgMusic.play()
            .then(function() {

                musicPlaying = true;

                musicButton.innerText =
                    "♫ Music On";

            })
            .catch(function(error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });
    }
});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const pieces = 80;

    const symbols = [
        "✦",
        "♡",
        "●",
        "✧",
        "♥"
    ];


    for (let i = 0; i < pieces; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (Math.random() * 14 + 8) + "px";

        piece.style.opacity =
            Math.random() * 0.6 + 0.4;

        const duration =
            Math.random() * 2 + 2;

        piece.style.animation =
            `confettiFall ${duration}s linear forwards`;

        document.body.appendChild(piece);

        setTimeout(function() {

            piece.remove();

        }, duration * 1000);
    }
}
```
