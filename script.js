/* =========================
   SECTION NAVIGATION
========================= */

function nextSection(sectionId) {

    // Hide all screens
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    // Show selected screen
    const nextScreen = document.getElementById(sectionId);

    nextScreen.classList.add("active");

    // Start at top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    const envelope = document.getElementById("envelope");

    envelope.style.transform = "scale(1.5) rotate(10deg)";
    envelope.style.opacity = "0";

    setTimeout(function() {

        nextSection("birthday");

        createConfetti();

    }, 500);
}


/* =========================
   REASONS
========================= */

const reasons = [

    {
        title: "You just get me.",
        text: "Kahit minsan wala na akong sense kausap, somehow naiintindihan mo pa rin. HAHAHA."
    },

    {
        title: "You make everything fun.",
        text: "Kahit simpleng labas lang, kapag kasama kita parang automatic may kwento na naman tayo."
    },

    {
        title: "You're always there.",
        text: "Sa good days, bad days, at sa mga araw na kailangan lang natin mag-rant. 😂"
    },

    {
        title: "You know the real me.",
        text: "You've seen the good, the bad, the weird, and somehow kaibigan mo pa rin ako."
    },

    {
        title: "You're simply you.",
        text: "And honestly, that's already more than enough reason to celebrate you today."
    }

];

let currentReason = 0;


function nextReason() {

    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = 0;
    }

    const title =
        document.getElementById("reasonTitle");

    const text =
        document.getElementById("reasonText");

    const number =
        document.querySelector(".reason-number");

    const counter =
        document.getElementById("reasonCounter");


    // Restart animation
    const card =
        document.getElementById("reasonCard");

    card.style.animation = "none";

    card.offsetHeight;

    card.style.animation =
        "cardAppear 0.5s ease";


    number.innerText =
        "0" + (currentReason + 1);

    title.innerText =
        reasons[currentReason].title;

    text.innerText =
        reasons[currentReason].text;

    counter.innerText =
        (currentReason + 1) + " / " + reasons.length;


    // After last reason
    if (currentReason === reasons.length - 1) {

        setTimeout(function() {

            const button =
                card.querySelector("button");

            button.innerText =
                "Okay... one last thing →";

            button.onclick = function() {
                nextSection("letter");
            };

        }, 300);

    }

}


/* =========================
   SHOW GIFT
========================= */

function showGift() {

    nextSection("gift");

}


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    const giftBox =
        document.getElementById("giftBox");

    giftBox.style.transform =
        "scale(1.4) rotate(10deg)";

    giftBox.style.opacity = "0";


    createConfetti();


    setTimeout(function() {

        nextSection("coffee");

    }, 800);

}


/* =========================
   ACCEPT COFFEE DATE
========================= */

function acceptDate() {

    const button =
        document.getElementById("acceptButton");

    const accepted =
        document.getElementById("accepted");


    button.innerText =
        "IT'S A DATE! ☕♡";


    accepted.innerText =
        "YAAAY! See you on October 9! 🥹";


    createConfetti();


    setTimeout(function() {

        nextSection("final");

    }, 2500);

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");


        const symbols = [
            "♥",
            "♡",
            "✦",
            "✧",
            "•"
        ];


        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.zIndex =
            "9999";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";

        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(confetti);


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


        setTimeout(function() {

            confetti.remove();

        }, duration);

    }

}
