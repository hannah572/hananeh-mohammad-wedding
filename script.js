@import url('https://fonts.googleapis.com/css2?family=Estedad:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');


/* =========================================================
   FONT
========================================================= */

@font-face {
    font-family: "IranNastaliq";
    src: url("assets/IranNastaliq.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


/* =========================================================
   VARIABLES
========================================================= */

:root {
    --pink: #c979a4;
    --pink-dark: #9f557f;
    --pink-light: #f8e9f2;

    --lilac: #b8a3c9;
    --lilac-light: #f0e9f5;

    --white: #fffafd;

    --text: #624b5b;
    --text-light: #927c8d;

    --border: rgba(184, 142, 171, 0.28);

    --shadow:
        0 12px 35px rgba(130, 75, 110, 0.10);
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    font-family: "Estedad", sans-serif;

    color: var(--text);

    background-color: #f8eaf3;

    background-image:
        linear-gradient(
            rgba(250, 238, 247, 0.93),
            rgba(246, 234, 246, 0.96)
        ),
        url("assets/background.jpg");

    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;

    overflow-x: hidden;
}

button,
a {
    font-family: inherit;
}

button {
    border: none;
}


/* =========================================================
   INTRO PAGE
========================================================= */

.intro {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px 20px;

    position: relative;

    background:
        linear-gradient(
            rgba(249, 233, 244, 0.78),
            rgba(244, 228, 242, 0.86)
        ),
        url("assets/background.jpg");

    background-position: center;
    background-size: cover;

    animation: introAppear 1.5s ease forwards;
}

.intro::before {
    content: "";

    position: absolute;
    inset: 18px;

    border: 1px solid rgba(255,255,255,0.75);

    border-radius: 25px;

    pointer-events: none;
}

.intro-content {
    width: min(90%, 500px);

    text-align: center;

    padding: 45px 25px;

    position: relative;

    animation: floatIn 1.2s ease both;
}

.intro-small {
    font-size: 0.85rem;

    color: var(--text-light);

    margin-bottom: 22px;

    letter-spacing: 0.3px;

    animation: fadeUp 1s ease 0.2s both;
}

.intro-symbol {
    font-family: "IranNastaliq", "Noto Naskh Arabic", serif;

    font-size: 3.3rem;

    color: var(--pink-dark);

    line-height: 1;

    margin-bottom: 15px;

    animation:
        fadeUp 1s ease 0.35s both,
        gentleFloat 4s ease-in-out 1.5s infinite;
}

.intro-symbol span {
    font-family: "Estedad", sans-serif;

    font-size: 1.5rem;

    color: var(--lilac);
}

.intro h1 {
    font-family: "IranNastaliq", "Noto Naskh Arabic", serif;

    font-size: clamp(3rem, 12vw, 5rem);

    font-weight: normal;

    color: var(--pink-dark);

    line-height: 1.2;

    margin-bottom: 15px;

    animation: fadeUp 1s ease 0.5s both;
}

.intro-line {
    width: 90px;
    height: 1px;

    background:
        linear-gradient(
            to right,
            transparent,
            var(--pink),
            transparent
        );

    margin: 12px auto 20px;

    animation: lineGrow 1.2s ease 0.7s both;
}

.intro p {
    font-size: 0.9rem;

    color: var(--text-light);

    margin-bottom: 30px;

    animation: fadeUp 1s ease 0.8s both;
}


/* =========================================================
   MAIN BUTTON
========================================================= */

.main-button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 190px;

    padding: 13px 28px;

    border-radius: 50px;

    background:
        linear-gradient(
            135deg,
            #c979a4,
            #ae78a8
        );

    color: white;

    font-size: 0.88rem;

    cursor: pointer;

    box-shadow:
        0 8px 22px rgba(168, 100, 145, 0.22);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    animation: fadeUp 1s ease 1s both;
}

.main-button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 12px 28px rgba(168, 100, 145, 0.3);
}

.main-button:active {
    transform: scale(0.97);
}


/* =========================================================
   MAIN CONTENT
========================================================= */

.hidden {
    display: none;
}

.main-content {
    width: 100%;
    min-height: 100vh;

    position: relative;

    background:
        linear-gradient(
            180deg,
            rgba(250, 237, 247, 0.94),
            rgba(247, 235, 247, 0.97)
        );

    animation: mainAppear 1s ease forwards;
}


/* =========================================================
   SECTIONS
========================================================= */

.section {
    width: min(92%, 850px);

    margin: 0 auto;

    padding: 75px 25px;

    text-align: center;

    position: relative;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: 85vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding-top: 100px;
    padding-bottom: 90px;
}

.decorative-line {
    width: 110px;
    height: 1px;

    margin: 12px auto 28px;

    background:
        linear-gradient(
            to right,
            transparent,
            var(--pink),
            transparent
        );

    animation: lineGrow 1.2s ease both;
}

.eyebrow {
    font-size: 0.82rem;

    color: var(--text-light);

    margin-bottom: 15px;

    animation: fadeUp 1s ease both;
}


/* =========================================================
   HERO NAMES
   فقط سایز فونت این بخش کوچک شده
========================================================= */

.hero h1 {
    font-family: "IranNastaliq", "Noto Naskh Arabic", serif;

    font-size: clamp(2.3rem, 8vw, 4.5rem);

    font-weight: normal;

    line-height: 1.3;

    color: var(--pink-dark);

    margin-bottom: 10px;

    white-space: nowrap;

    animation: nameAppear 1.1s ease 0.2s both;
}

.hero h1 span {
    font-family: "Estedad", sans-serif;

    font-size: 0.28em;

    color: var(--lilac);

    margin: 0 4px;

    vertical-align: middle;
}

.hero-date {
    font-size: 1rem;

    color: var(--text);

    margin-bottom: 30px;

    animation: fadeUp 1s ease 0.5s both;
}

.hero-poem {
    font-family: "IranNastaliq", "Noto Naskh Arabic", serif;

    font-size: clamp(1.5rem, 5vw, 2.2rem);

    color: var(--pink-dark);

    line-height: 2;

    margin-top: 5px;

    animation: fadeUp 1s ease 0.7s both;
}


/* =========================================================
   INVITATION
========================================================= */

.invitation {
    width: min(92%, 760px);

    background:
        linear-gradient(
            145deg,
            rgba(255, 251, 254, 0.94),
            rgba(248, 237, 247, 0.96)
        );

    border: 1px solid rgba(255,255,255,0.9);

    border-radius: 30px;

    box-shadow: var(--shadow);

    margin-bottom: 35px;

    padding: 65px 28px;

    overflow: hidden;
}

.invitation::before {
    content: "♡";

    position: absolute;

    left: 20px;
    top: 15px;

    font-size: 4rem;

    color: rgba(201, 121, 164, 0.08);

    transform: rotate(-15deg);
}

.section-label {
    font-size: 0.78rem;

    color: var(--lilac);

    margin-bottom: 13px;

    letter-spacing: 0.3px;
}

.invitation h2,
.details h2,
.countdown-section h2 {
    font-family: "IranNastaliq", "Noto Naskh Arabic", serif;

    font-size: clamp(2rem, 7vw, 3rem);

    font-weight: normal;

    color: var(--pink-dark);

    margin-bottom: 25px;

    line-height: 1.5;
}

.invitation-text {
    max-width: 570px;

    margin: 0 auto 30px;

    font-size: 0.92rem;

    line-height: 2.3;

    color: var(--text-light);
}

.invitation-decoration {
    font-size: 1.5rem;

    color: var(--pink);

    margin-top: 25px;

    animation:
        gentleFloat 3s ease-in-out infinite;
}


/* =========================================================
   DETAILS
========================================================= */

.details {
    width: min(94%, 900px);

    padding-top: 75px;
    padding-bottom: 75px;
}

.details-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 15px;

    margin-top: 35px;
}

.detail-card {
    min-height: 185px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 22px 15px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.96),
            rgba(251,242,249,0.96)
        );

    border: 1px solid var(--border);

    border-radius: 24px;

    box-shadow:
        0 8px 25px rgba(130, 75, 110, 0.06);

    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;

    animation: cardAppear 0.8s ease both;
}

.detail-card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 15px 30px rgba(130, 75, 110, 0.11);
}

.detail-card-wide {
    grid-column: 1 / -1;

    min-height: 200px;
}

.detail-icon {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: var(--pink-light);

    color: var(--pink-dark);

    font-size: 1.2rem;

    margin-bottom: 13px;
}

.detail-title {
    font-size: 0.76rem;

    color: var(--lilac);

    margin-bottom: 8px;
}

.detail-card strong {
    font-size: 0.9rem;

    font-weight: 500;

    color: var(--text);

    line-height: 1.9;
}


/* =========================================================
   MAP BUTTON
========================================================= */

.map-button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    margin-top: 15px;

    padding: 9px 18px;

    border-radius: 30px;

    background: var(--pink-light);

    color: var(--pink-dark);

    text-decoration: none;

    font-size: 0.75rem;

    transition:
        background 0.3s ease,
        transform 0.3s ease;
}

.map-button:hover {
    background: #f2dce9;

    transform: translateY(-2px);
}


/* =========================================================
   COUNTDOWN
========================================================= */

.countdown-section {
    padding-top: 80px;
    padding-bottom: 80px;
}

.countdown {
    display: flex;

    align-items: center;
    justify-content: center;

    direction: ltr;

    margin-top: 35px;

    gap: 8px;
}

.count-box {
    min-width: 70px;

    padding: 15px 8px;

    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.95),
            rgba(247,233,245,0.95)
        );

    border: 1px solid var(--border);

    box-shadow:
        0 7px 20px rgba(130,75,110,0.06);
}

.count-box span {
    display: block;

    font-size: 1.45rem;

    font-weight: 600;

    color: var(--pink-dark);

    margin-bottom: 4px;
}

.count-box small {
    font-size: 0.65rem;

    color: var(--text-light);
}

.count-separator {
    font-size: 1.4rem;

    color: var(--lilac);

    margin-top: -18px;
}


/* =========================================================
   CLOSING
========================================================= */

.closing {
    padding-top: 90px;
    padding-bottom: 90px;
}

.closing-symbol {
    font-size: 2rem;

    color: var(--pink);

    margin-bottom: 20px;

    animation:
        heartbeat 2.5s ease-in-out infinite;
}

.closing p {
    font-size: 0.85rem;

    line-height: 2;

    color: var(--text-light);

    margin-bottom: 20px;
}

.closing h2 {
    font-family: "IranNastaliq", "Noto Naskh Arabic", serif;

    font-size: clamp(2.7rem, 10vw, 4.5rem);

    font-weight: normal;

    color: var(--pink-dark);

    line-height: 1.3;

    margin-bottom: 5px;
}

.closing-date {
    font-size: 0.8rem;

    color: var(--lilac);
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    text-align: center;

    padding: 25px 15px 35px;

    font-size: 0.68rem;

    color: rgba(98, 75, 91, 0.5);
}


/* =========================================================
   MUSIC BUTTON
========================================================= */

.music-button {
    position: fixed;

    bottom: 20px;
    left: 20px;

    width: 48px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #c979a4,
            #aa78aa
        );

    color: white;

    font-size: 1.25rem;

    cursor: pointer;

    box-shadow:
        0 8px 20px rgba(130,75,110,0.2);

    z-index: 100;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.music-button:hover {
    transform: scale(1.08);

    box-shadow:
        0 10px 25px rgba(130,75,110,0.28);
}

.music-button.playing {
    animation:
        musicPulse 1.8s ease-in-out infinite;
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes introAppear {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }

}

@keyframes mainAppear {

    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

@keyframes floatIn {

    from {
        opacity: 0;
        transform: translateY(25px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

}

@keyframes nameAppear {

    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

}

@keyframes lineGrow {

    from {
        opacity: 0;
        transform: scaleX(0);
    }

    to {
        opacity: 1;
        transform: scaleX(1);
    }

}

@keyframes gentleFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }

}

@keyframes heartbeat {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.12);
    }

}

@keyframes musicPulse {

    0%,
    100% {
        box-shadow:
            0 8px 20px rgba(130,75,110,0.2);
    }

    50% {
        box-shadow:
            0 8px 28px rgba(130,75,110,0.4);
    }

}

@keyframes cardAppear {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    body {
        background-attachment: scroll;

        background-size: auto 100vh;

        background-position: center top;
    }


    .intro {
        min-height: 100svh;

        padding: 20px;
    }


    .intro::before {
        inset: 12px;

        border-radius: 20px;
    }


    .intro-content {
        padding: 30px 15px;
    }


    .intro-small {
        font-size: 0.75rem;
    }


    .intro-symbol {
        font-size: 2.8rem;
    }


    .intro h1 {
        font-size: clamp(3rem, 15vw, 4.5rem);
    }


    .intro p {
        font-size: 0.78rem;
    }


    .main-button {
        min-width: 175px;

        padding: 12px 22px;

        font-size: 0.8rem;
    }


    .section {
        width: 94%;

        padding: 60px 18px;
    }


    .hero {
        min-height: 82vh;

        padding-top: 80px;
    }


    /*
       فقط اندازه فونت نام‌ها کاهش داده شده.
       هیچ بخش دیگری تغییر نکرده.
    */

    .hero h1 {
        font-size: 2.65rem;

        white-space: nowrap;
    }


    .hero-poem {
        font-size: 1.45rem;

        padding: 0 10px;
    }


    .invitation {
        padding: 50px 20px;

        border-radius: 25px;
    }


    .invitation h2,
    .details h2,
    .countdown-section h2 {
        font-size: 2.2rem;
    }


    .invitation-text {
        font-size: 0.8rem;

        line-height: 2.2;
    }


    .details-grid {
        grid-template-columns: 1fr;

        gap: 12px;
    }


    .detail-card,
    .detail-card-wide {
        grid-column: auto;

        min-height: 160px;
    }


    .countdown {
        gap: 4px;
    }


    .count-box {
        min-width: 58px;

        padding: 12px 5px;

        border-radius: 15px;
    }


    .count-box span {
        font-size: 1.15rem;
    }


    .count-box small {
        font-size: 0.58rem;
    }


    .count-separator {
        font-size: 1rem;

        margin-top: -15px;
    }


    .closing h2 {
        font-size: 3.2rem;
    }


    .music-button {
        width: 44px;
        height: 44px;

        bottom: 16px;
        left: 16px;
    }

}


/* =========================================================
   VERY SMALL PHONES
========================================================= */

@media (max-width: 370px) {

    .hero h1 {
        font-size: 2.35rem;
    }


    .hero-poem {
        font-size: 1.3rem;
    }


    .count-box {
        min-width: 52px;
    }


    .count-box span {
        font-size: 1rem;
    }


    .count-separator {
        font-size: 0.85rem;
    }

}
