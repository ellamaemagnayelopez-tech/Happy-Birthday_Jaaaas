document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SCREEN NAVIGATION
    ========================= */

    const screens = document.querySelectorAll(".screen");
    const nextButtons = document.querySelectorAll(".next-button");

    function showScreen(screenId) {

        screens.forEach(function (screen) {
            screen.classList.remove("active");
        });

        const target = document.getElementById(screenId);

        if (target) {
            target.classList.add("active");

            /* Reset scroll position */
            target.scrollTop = 0;

            const scrollable = target.querySelector(
                ".letter-paper, .memories-content"
            );

            if (scrollable) {
                scrollable.scrollTop = 0;
            }
        }
    }


    /* EVERY NEXT BUTTON */

    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const nextScreen = button.getAttribute("data-next");

            if (!nextScreen) {
                return;
            }

            showScreen(nextScreen);

            /* Start music after user interaction */
            if (nextScreen === "birthday") {
                startMusic();
            }

        });

    });


    /* =========================
       BACKGROUND MUSIC
    ========================= */

    const bgMusic = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    let musicStarted = false;

    if (bgMusic) {
        bgMusic.volume = 0.35;
    }


    function startMusic() {

        if (!bgMusic || musicStarted) {
            return;
        }

        const playPromise = bgMusic.play();

        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    musicStarted = true;

                    if (musicButton) {
                        musicButton.textContent = "♫ Music On";
                    }

                })
                .catch(function () {
                    /* Browser blocked autoplay.
                       User can use music button. */
                });
        }
    }


    if (musicButton) {

        musicButton.addEventListener("click", function () {

            if (!bgMusic) {
                return;
            }

            if (bgMusic.paused) {

                bgMusic.play()
                    .then(function () {

                        musicStarted = true;
                        musicButton.textContent = "♫ Music On";

                    })
                    .catch(function () {
                        musicButton.textContent = "♫ Music Off";
                    });

            } else {

                bgMusic.pause();

                musicButton.textContent = "♫ Music Off";
            }

        });

    }


    /* =========================
       GIFT
    ========================= */

    const giftBox = document.getElementById("giftBox");
    const giftMessage = document.getElementById("giftMessage");

    if (giftBox && giftMessage) {

        giftBox.addEventListener("click", function () {

            giftBox.classList.toggle("open");
            giftMessage.classList.toggle("show");

        });

    }


    /* =========================
       KEYBOARD SUPPORT
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            const activeScreen = document.querySelector(".screen.active");

            if (!activeScreen) {
                return;
            }

            const button = activeScreen.querySelector(".next-button");

            if (button) {
                button.click();
            }

        }

    });

});
