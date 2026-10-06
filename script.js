document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       BACKGROUND MUSIC
    ========================= */

    const bgMusic = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    if (!bgMusic) {
        console.log("Audio element not found.");
        return;
    }

    bgMusic.volume = 0.35;


    function updateMusicButton() {

        if (!musicButton) {
            return;
        }

        if (bgMusic.paused) {
            musicButton.textContent = "♫ Music Off";
        } else {
            musicButton.textContent = "♫ Music On";
        }

    }


    function playMusic() {

        bgMusic.play()
            .then(function () {

                updateMusicButton();

            })
            .catch(function (error) {

                console.log("Music failed to play:", error);

            });

    }


    /*
     * Start music on the first user interaction.
     */
    let musicStarted = false;

    document.addEventListener("click", function () {

        if (!musicStarted && bgMusic.paused) {

            musicStarted = true;
            playMusic();

        }

    }, { once: true });


    /* MUSIC ON / OFF BUTTON */

    if (musicButton) {

        musicButton.addEventListener("click", function (event) {

            event.stopPropagation();

            if (bgMusic.paused) {

                playMusic();

            } else {

                bgMusic.pause();
                updateMusicButton();

            }

        });

    }


    /* =========================
       PAGE NAVIGATION
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
            target.scrollTop = 0;


            const letterPaper =
                target.querySelector(".letter-paper");


            if (letterPaper) {

                letterPaper.scrollTop = 0;

            }

        }

    }


    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const nextScreen =
                button.getAttribute("data-next");


            if (!nextScreen) {
                return;
            }


            showScreen(nextScreen);

        });

    });


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

        if (event.key !== "Enter") {
            return;
        }


        const activeScreen =
            document.querySelector(".screen.active");


        if (!activeScreen) {
            return;
        }


        const button =
            activeScreen.querySelector(".next-button");


        if (button) {

            button.click();

        }

    });


    /* =========================
       INITIAL MUSIC BUTTON
    ========================= */

    updateMusicButton();

});
