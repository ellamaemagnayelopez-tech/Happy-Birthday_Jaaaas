/* =========================
   SCREEN NAVIGATION
========================= */

const screens = document.querySelectorAll(".screen");

const nextButtons =
    document.querySelectorAll(".next-button");


function showScreen(screenId) {

    screens.forEach(function (screen) {

        screen.classList.remove("active");

    });

    const nextScreen =
        document.getElementById(screenId);

    nextScreen.classList.add("active");

}


/* =========================
   NEXT BUTTONS
========================= */

nextButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const nextScreen =
            button.getAttribute("data-next");

        showScreen(nextScreen);

    });

});


/* =========================
   GIFT BOX
========================= */

const giftWrapper =
    document.getElementById("giftWrapper");

const giftMessage =
    document.getElementById("giftMessage");

const giftHint =
    document.getElementById("giftHint");


let giftOpened = false;


giftWrapper.addEventListener("click", function () {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    giftWrapper.classList.add("open");

    giftHint.style.display = "none";

    createConfetti();


    setTimeout(function () {

        giftMessage.classList.add("show");

    }, 800);

});


/* =========================
   COFFEE DATE
========================= */

const acceptButton =
    document.getElementById("acceptButton");

const acceptedMessage =
    document.getElementById("acceptedMessage");


acceptButton.addEventListener("click", function () {

    acceptButton.innerText =
        "IT'S A DATE! ☕♡";

    acceptButton.disabled = true;

    acceptedMessage.innerText =
        "YAAAY! See you on October 9! 🥹";

    createConfetti();


    setTimeout(function () {

        showScreen("final");

    }, 1800);

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "•"
    ];


    for (let i = 0; i < 70; i++) {

        const confetti =
            document.createElement("div");


        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";


        const duration =
            Math.random() * 2500 + 2000;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",

                    opacity: 0
                }
            ],

            {
                duration: duration,

                easing: "ease-out"
            }

        );


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, duration);

    }

}
