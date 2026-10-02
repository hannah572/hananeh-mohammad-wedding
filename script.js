document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("weddingMusic");
    const musicButton = document.getElementById("musicButton");


    /* =========================
       MUSIC BUTTON
    ========================= */

    musicButton.addEventListener("click", async function () {

        if (music.paused) {

            try {

                await music.play();

                musicButton.classList.add("playing");

                musicButton.innerHTML = "♫";

            } catch (error) {

                console.log("Music could not be played.");

            }

        } else {

            music.pause();

            musicButton.classList.remove("playing");

            musicButton.innerHTML = "♪";

        }

    });


    /* =========================
       MUSIC EVENTS
    ========================= */

    music.addEventListener("play", function () {

        musicButton.classList.add("playing");

        musicButton.innerHTML = "♫";

    });


    music.addEventListener("pause", function () {

        musicButton.classList.remove("playing");

        musicButton.innerHTML = "♪";

    });


    /* =========================
       COUNTDOWN
    ========================= */

    const targetDate =
        new Date("2026-10-08T19:00:00+03:30").getTime();


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    function toPersianNumber(number) {

        return String(number).replace(/\d/g, function (digit) {

            return "۰۱۲۳۴۵۶۷۸۹"[digit];

        });

    }


    function updateCountdown() {

        const now =
            new Date().getTime();

        const distance =
            targetDate - now;


        if (distance <= 0) {

            daysElement.textContent = "۰۰";
            hoursElement.textContent = "۰۰";
            minutesElement.textContent = "۰۰";
            secondsElement.textContent = "۰۰";

            return;
        }


        const days =
            Math.floor(
                distance / (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance % (1000 * 60 * 60))
                / (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance % (1000 * 60))
                / 1000
            );


        daysElement.textContent =
            toPersianNumber(
                String(days).padStart(2, "0")
            );


        hoursElement.textContent =
            toPersianNumber(
                String(hours).padStart(2, "0")
            );


        minutesElement.textContent =
            toPersianNumber(
                String(minutes).padStart(2, "0")
            );


        secondsElement.textContent =
            toPersianNumber(
                String(seconds).padStart(2, "0")
            );

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);

});
