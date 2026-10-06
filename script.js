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
            target.scrollTop = 0;

            const letterPaper = target.querySelector(".letter-paper");

            if (letterPaper) {
                letterPaper.scrollTop = 0;
            }
        }
    }


    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const nextScreen = button.getAttribute("data-next");

            if (!nextScreen) {
                return;
            }

            /*
             * IMPORTANT:
             * Start music on the FIRST button click.
             * This is allowed because the click is a
             * user interaction.
             */
            if (nextScreen === "birthday") {
                startMusic();
            }

            showScreen(nextScreen);

        });

    });


    /* =========================
       BACKGROUND MUSIC
    ========================= */

    const bgMusic = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    if (bgMusic) {
        bgMusic.volume = 0.35;
    }


    function updateMusicButton() {

        if (!musicButton || !bgMusic) {
            return;
        }

        if (bgMusic.paused) {
            musicButton.textContent = "♫ Music Off";
        } else {
            musicButton.textContent = "♫ Music On";
        }

    }


    function startMusic() {

        if (!bgMusic) {
            return;
        }

        /*
         * If music is already playing,
         * don't restart it.
         */
        if (!bgMusic.paused) {
            return;
        }

        const playPromise = bgMusic.play();

        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    updateMusicButton();

                })
                .catch(function (error) {

                    console.log(
                        "Music could not start:",
                        error
                    );

                    updateMusicButton();

                });

        }

    }


    /* MUSIC BUTTON */

    if (musicButton) {

        musicButton.addEventListener("click", function () {

            if (!bgMusic) {
                return;
            }


            if (bgMusic.paused) {

                const playPromise = bgMusic.play();

                if (playPromise !== undefined) {

                    playPromise
                        .then(function () {

                            updateMusicButton();

                        })
                        .catch(function (error) {

                            console.log(
                                "Music could not play:",
                                error
                            );

                            updateMusicButton();

                        });

                }

            } else {

                bgMusic.pause();

                updateMusicButton();

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

});
