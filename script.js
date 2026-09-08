/* =========================
   GIFT BOX
========================= */

const giftWrapper = document.getElementById("giftWrapper");
const giftMessage = document.getElementById("giftMessage");

giftWrapper.addEventListener("click", function () {

    // Open the gift
    giftWrapper.classList.add("open");

    // Show hidden message
    setTimeout(function () {

        giftMessage.classList.add("show");

    }, 700);

    // Confetti
    createConfetti();

});


/* =========================
   COFFEE DATE BUTTON
========================= */

const acceptButton =
    document.getElementById("acceptButton");

const acceptedMessage =
    document.getElementById("acceptedMessage");


acceptButton.addEventListener("click", function () {

    acceptButton.innerText =
        "IT'S A DATE! ☕♡";

    acceptedMessage.innerText =
        "YAAAY! See you on October 9! 🥹";

    createConfetti();

    // Automatically go to final section
    setTimeout(function () {

        document
            .getElementById("final")
            .scrollIntoView({
                behavior: "smooth"
            });

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

        confetti.style.pointerEvents =
            "none";

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


/* =========================
   SCROLL REVEAL
========================= */

const cards =
    document.querySelectorAll(".reason-card");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
