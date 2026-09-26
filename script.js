/* =========================================
   عناصر صفحه
========================================= */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const enterButton = document.getElementById("enterButton");

const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const weddingMusic = document.getElementById("weddingMusic");


/* =========================================
   ورود به دعوت‌نامه
   و شروع موسیقی
========================================= */

enterButton.addEventListener("click", async () => {

    intro.style.opacity = "0";
    intro.style.transition = "opacity 0.7s ease";

    setTimeout(() => {
        intro.style.display = "none";

        mainContent.classList.remove("hidden");
        musicButton.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 700);


    /*
       شروع موسیقی بعد از کلیک کاربر.
       این روش با محدودیت‌های Autoplay مرورگرها
       سازگارتر است.
    */

    try {

        await weddingMusic.play();

        musicButton.classList.add("playing");
        musicIcon.textContent = "Ⅱ";

    } catch (error) {

        console.log(
            "پخش خودکار موسیقی توسط مرورگر اجازه داده نشد."
        );

    }

});


/* =========================================
   کنترل موسیقی
========================================= */

musicButton.addEventListener("click", async () => {

    if (weddingMusic.paused) {

        try {

            await weddingMusic.play();

            musicButton.classList.add("playing");
            musicIcon.textContent = "Ⅱ";

        } catch (error) {

            console.log("امکان پخش موسیقی وجود ندارد.");

        }

    } else {

        weddingMusic.pause();

        musicButton.classList.remove("playing");
        musicIcon.textContent = "♫";

    }

});


/* =========================================
   شمارش معکوس
========================================= */

/*
   تاریخ مراسم:
   ۱۶ مهر ۱۴۰۵
   برابر با ۸ اکتبر ۲۰۲۶
   ساعت ۱۹:۰۰
*/

const weddingDate = new Date(
    "2026-10-08T19:00:00+03:30"
);


function updateCountdown() {

    const now = new Date();

    const difference = weddingDate.getTime() - now.getTime();


    /*
       اگر مراسم شروع شده باشد
    */

    if (difference <= 0) {

        document.getElementById("days").textContent = "۰";
        document.getElementById("hours").textContent = "۰";
        document.getElementById("minutes").textContent = "۰";
        document.getElementById("seconds").textContent = "۰";

        return;
    }


    const totalSeconds = Math.floor(
        difference / 1000
    );


    const days = Math.floor(
        totalSeconds / (24 * 60 * 60)
    );

    const hours = Math.floor(
        (totalSeconds % (24 * 60 * 60)) /
        (60 * 60)
    );

    const minutes = Math.floor(
        (totalSeconds % (60 * 60)) /
        60
    );

    const seconds = totalSeconds % 60;


    document.getElementById("days").textContent =
        toPersianNumber(days);

    document.getElementById("hours").textContent =
        toPersianNumber(hours);

    document.getElementById("minutes").textContent =
        toPersianNumber(minutes);

    document.getElementById("seconds").textContent =
        toPersianNumber(seconds);
}


/* =========================================
   تبدیل اعداد انگلیسی به فارسی
========================================= */

function toPersianNumber(number) {

    return number
        .toString()
        .replace(/\d/g, digit => "۰۱۲۳۴۵۶۷۸۹"[digit]);

}


/* =========================================
   اجرای شمارش معکوس
========================================= */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);
