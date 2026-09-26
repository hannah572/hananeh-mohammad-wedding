/* =====================================================
   FIREBASE CONFIG
=====================================================

   بعداً اطلاعات Firebase خودت را اینجا می‌گذاری.

===================================================== */


const firebaseConfig = {

    apiKey:
        "YOUR_API_KEY",

    authDomain:
        "YOUR_PROJECT.firebaseapp.com",

    databaseURL:
        "https://YOUR_PROJECT-default-rtdb.firebaseio.com",

    projectId:
        "YOUR_PROJECT_ID",

    storageBucket:
        "YOUR_PROJECT.firebasestorage.app",

    messagingSenderId:
        "YOUR_SENDER_ID",

    appId:
        "YOUR_APP_ID"

};


let database = null;


/* =====================================================
   FIREBASE INITIALIZATION
===================================================== */


const firebaseConfigured =
    !Object
        .values(firebaseConfig)
        .some(value =>
            String(value).startsWith("YOUR_")
        );


if (firebaseConfigured) {

    firebase.initializeApp(firebaseConfig);

    database =
        firebase.database();

}


/* =====================================================
   INTRO
===================================================== */


const intro =
    document.getElementById("intro");

const website =
    document.getElementById("website");

const openButton =
    document.getElementById("openInvitation");


const music =
    document.getElementById("weddingMusic");

const musicButton =
    document.getElementById("musicButton");


openButton.addEventListener(
    "click",
    async () => {

        intro.classList.add("hidden");

        website.hidden = false;


        /*
         * چون این تابع توسط کاربر
         * اجرا شده، مرورگر اجازه
         * پخش موسیقی را می‌دهد.
         */

        try {

            await music.play();

            musicButton.classList.add(
                "playing"
            );

        }

        catch (error) {

            console.log(
                "Autoplay blocked:",
                error
            );

        }

    }
);


/* =====================================================
   MUSIC BUTTON
===================================================== */


musicButton.addEventListener(
    "click",
    async () => {

        if (music.paused) {

            try {

                await music.play();

                musicButton.classList.add(
                    "playing"
                );

            }

            catch (error) {

                console.log(error);

            }

        }

        else {

            music.pause();

            musicButton.classList.remove(
                "playing"
            );

        }

    }
);


/* =====================================================
   COUNTDOWN
===================================================== */


/*
   16 مهر 1405
   = 8 October 2026

   ساعت شروع:
   19:00
   Iran UTC+3:30
*/


const weddingDate =
    new Date(
        "2026-10-08T19:00:00+03:30"
    ).getTime();


function updateCountdown() {

    const now =
        Date.now();


    let difference =
        weddingDate - now;


    if (difference < 0) {

        difference = 0;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        ) % 24;


    const minutes =
        Math.floor(
            difference /
            (1000 * 60)
        ) % 60;


    const seconds =
        Math.floor(
            difference /
            1000
        ) % 60;


    document.getElementById(
        "days"
    ).textContent = days;


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   GUESTBOOK
===================================================== */


const form =
    document.getElementById(
        "guestbookForm"
    );


const nameInput =
    document.getElementById(
        "guestName"
    );


const messageInput =
    document.getElementById(
        "guestMessage"
    );


const status =
    document.getElementById(
        "formStatus"
    );


const messages =
    document.getElementById(
        "messages"
    );


/* جلوگیری از HTML Injection */

function escapeHTML(text) {

    return String(text)
        .replace(
            /[&<>"']/g,
            character => {

                const map = {

                    "&": "&amp;",

                    "<": "&lt;",

                    ">": "&gt;",

                    '"': "&quot;",

                    "'": "&#039;"

                };

                return map[character];

            }
        );

}


/* =====================================================
   RENDER MESSAGE
===================================================== */


function renderMessage(data) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "message";


    const date =
        data.createdAt
            ? new Date(
                data.createdAt
              ).toLocaleDateString(
                "fa-IR"
              )
            : "";


    article.innerHTML = `

        <div class="message-header">

            <strong>
                ${escapeHTML(data.name)}
            </strong>

            <time>
                ${date}
            </time>

        </div>

        <p>
            ${escapeHTML(data.message)}
        </p>

    `;


    return article;

}


/* =====================================================
   LOAD MESSAGES
===================================================== */


function showLocalMessages() {

    const saved =
        JSON.parse(
            localStorage.getItem(
                "weddingGuestbook"
            ) || "[]"
        );


    messages.innerHTML = "";


    if (!saved.length) {

        messages.innerHTML = `
            <p>
                هنوز یادبودی ثبت نشده است.
                اولین نفر باشید 🤍
            </p>
        `;

        return;

    }


    saved
        .slice()
        .reverse()
        .forEach(
            message => {

                messages.appendChild(
                    renderMessage(
                        message
                    )
                );

            }
        );

}


/*
   اگر Firebase وصل شده باشد،
   پیام‌ها از دیتابیس خوانده می‌شوند.
*/


if (database) {

    database
        .ref("guestbook")
        .orderByChild("createdAt")
        .limitToLast(100)
        .on(
            "value",
            snapshot => {

                messages.innerHTML = "";


                let count = 0;


                snapshot.forEach(
                    child => {

                        const message =
                            child.val();


                        messages.prepend(
                            renderMessage(
                                message
                            )
                        );


                        count++;

                    }
                );


                if (count === 0) {

                    messages.innerHTML = `
                        <p>
                            هنوز یادبودی ثبت نشده است.
                            اولین نفر باشید 🤍
                        </p>
                    `;

                }

            }
        );

}

else {

    /*
       فقط برای تست محلی.
       بعد از تنظیم Firebase
       این حالت دیگر استفاده نمی‌شود.
    */

    showLocalMessages();

}


/* =====================================================
   SUBMIT GUESTBOOK
===================================================== */


form.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        const name =
            nameInput.value.trim();


        const message =
            messageInput.value.trim();


        if (!name || !message) {

            return;

        }


        status.textContent =
            "در حال ثبت پیام...";


        const data = {

            name:
                name,

            message:
                message,

            createdAt:
                Date.now()

        };


        try {


            if (database) {

                await database
                    .ref("guestbook")
                    .push(data);

            }


            else {

                /*
                   حالت آزمایشی
                */

                const saved =
                    JSON.parse(
                        localStorage.getItem(
                            "weddingGuestbook"
                        ) || "[]"
                    );


                saved.push(data);


                localStorage.setItem(
                    "weddingGuestbook",
                    JSON.stringify(
                        saved.slice(-100)
                    )
                );


                showLocalMessages();

            }


            form.reset();


            status.textContent =
                "یادبود شما ثبت شد 🤍";


        }


        catch (error) {

            console.error(error);


            status.textContent =
                "ثبت پیام انجام نشد. دوباره تلاش کنید.";

        }

    }
);
