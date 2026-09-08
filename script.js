/* =========================================
   SCREEN NAVIGATION
========================================= */

const screens = document.querySelectorAll(".screen");

const nextButtons =
    document.querySelectorAll(".next-button");


function showScreen(screenId) {

    screens.forEach(function (screen) {

        screen.classList.remove("active");

    });

    const nextScreen =
        document.getElementById(screenId);

    if (nextScreen) {

        nextScreen.classList.add("active");

    }

}


/* =========================================
   NEXT BUTTONS
========================================= */

nextButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const nextScreen =
            button.getAttribute("data-next");

        showScreen(nextScreen);

    });

});


/* =========================================
   BIRTHDAY REVEAL
========================================= */

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


/* STEP 1 */

if (birthdayRevealButton) {

    birthdayRevealButton.addEventListener(
        "click",
        function () {

            showBirthdayStep(birthdayStep2);

            createConfetti();

        }
    );

}


/* STEP 2 */

if (birthdayMoreButton) {

    birthdayMoreButton.addEventListener(
        "click",
        function () {

            showBirthdayStep(birthdayStep3);

        }
    );

}


/* =========================================
   GIFT BOX
========================================= */

const giftWrapper =
    document.getElementById("giftWrapper");

const giftMessage =
    document.getElementById("giftMessage");

const giftHint =
    document.getElementById("giftHint");

let giftOpened = false;


if (giftWrapper) {

    giftWrapper.addEventListener(
        "click",
        function () {

            if (giftOpened) {
                return;
            }

            giftOpened = true;

            giftWrapper.classList.add("open");

            if (giftHint) {

                giftHint.style.display = "none";

            }

            createConfetti();


            setTimeout(function () {

                if (giftMessage) {

                    giftMessage.classList.add("show");

                }

            }, 800);

        }
    );

}


/* =========================================
   ACCEPT DATE
========================================= */

const acceptButton =
    document.getElementById("acceptButton");

const acceptedMessage =
    document.getElementById("acceptedMessage");


if (acceptButton) {

    acceptButton.addEventListener(
        "click",
        function () {

            acceptButton.innerText =
                "IT'S A DATE! ☕♡";

            acceptButton.disabled = true;

            acceptedMessage.innerText =
                "YAAAY! See you on October 9! 🥹";

            acceptButton.style.transform =
                "scale(1.08)";

            createConfetti();


            setTimeout(function () {

                showScreen("final");

            }, 2000);

        }
    );

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "•",
        "✨",
        "🎀"
    ];


    for (let i = 0; i < 90; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti-piece"
        );

        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            Math.random() * 18 + 10 + "px";

        const duration =
            Math.random() * 2500 + 2000;

        const rotation =
            Math.random() * 720;

        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${rotation}deg)`,
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
