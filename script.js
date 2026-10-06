document.addEventListener("DOMContentLoaded", function () {

    const bgMusic = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    if (!bgMusic) {
        console.log("Audio element not found.");
        return;
    }

    bgMusic.volume = 0.35;

    function updateButton() {
        if (bgMusic.paused) {
            musicButton.textContent = "♫ Music Off";
        } else {
            musicButton.textContent = "♫ Music On";
        }
    }

    function playMusic() {

    if (!bgMusic) {
        return;
    }

    bgMusic.play()
        .then(function () {
            musicButton.textContent = "♫ Music On";
        })
        .catch(function (error) {
            console.log("Music failed:", error);
        });
}
    /*
     * Start music when the user clicks anywhere
     * on the website for the first time.
     */
    document.addEventListener("click", function () {
        if (bgMusic.paused) {
            playMusic();
        }
    }, { once: true });


    /* Music On / Off button */

    if (musicButton) {

        musicButton.addEventListener("click", function (event) {

            event.stopPropagation();

            if (bgMusic.paused) {
                playMusic();
            } else {
                bgMusic.pause();
                updateButton();
            }

        });

    }


    /* PAGE NAVIGATION */

    const screens = document.querySelectorAll(".screen");
    const nextButtons = document.querySelectorAll(".next-button");

    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const nextScreen =
                button.getAttribute("data-next");

            if (!nextScreen) {
                return;
            }

            screens.forEach(function (screen) {
                screen.classList.remove("active");
            });

            const target =
                document.getElementById(nextScreen);

            if (target) {
                target.classList.add("active");
                target.scrollTop = 0;
            }

        });

    });


    /* GIFT */

    const giftBox = document.getElementById("giftBox");
    const giftMessage = document.getElementById("giftMessage");

    if (giftBox && giftMessage) {

        giftBox.addEventListener("click", function () {

            giftBox.classList.toggle("open");
            giftMessage.classList.toggle("show");

        });

    }

});
