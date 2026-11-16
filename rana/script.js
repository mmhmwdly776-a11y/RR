
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen6 = document.getElementById("screen6");

const finishBtn = document.getElementById("finishBtn");
const restartBtn = document.getElementById("restartBtn");

const gift = document.getElementById("gift");

const giftBtn = document.getElementById("giftBtn");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");

const typingText = document.getElementById("typingText");

// الانتقال بين الشاشات
function changeScreen(oldScreen, newScreen) {

    oldScreen.classList.remove("active");

    setTimeout(function() {
        oldScreen.style.display = "none";

        newScreen.style.display = "block";

        newScreen.classList.add("active");

    }, 400);
}

// الضغط على افتحي المفاجأة
openBtn.addEventListener("click", function() {

    changeScreen(screen1, screen2);

    setTimeout(function() {
        startTyping();
    }, 500);

});

// كتابة الرسالة حرفًا وراء حرف
const message =
"يمكن بعض الحكايات بتبدأ من غير ترتيب، لكن بتفضل ليها مكانة خاصة... وانتي يارنا، ليكي حكاية مختلفة. ❤️";

function startTyping() {

    let i = 0;

    typingText.textContent = "";

    const typing = setInterval(function() {

        typingText.textContent += message[i];

        i++;

        if (i >= message.length) {
            clearInterval(typing);
        }

    }, 70);

}

// الانتقال للشاشة الثالثة
nextBtn.addEventListener("click", function() {

    changeScreen(screen2, screen3);

});

// إنشاء القلوب المتحركة
const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 500);
// فتح صندوق الهدية

giftBtn.addEventListener("click", function() {

    gift.classList.add("open");

    giftBtn.disabled = true;

    giftBtn.textContent = "المفاجأة ليكي ❤️";

    setTimeout(function() {

        changeScreen(screen3, screen4);

    }, 1500);

});
const galleryBtn = document.getElementById("galleryBtn");
const screen5 = document.getElementById("screen5");

galleryBtn.addEventListener("click", function () {
    changeScreen(screen4, screen5);
});
// تكبير الصور عند الضغط عليها

const galleryImages = document.querySelectorAll(".photo-gallery img");

let currentImageIndex = 0;

// إنشاء نافذة عرض الصور
const lightbox = document.createElement("div");

lightbox.classList.add("lightbox");

lightbox.innerHTML = `
    <button class="lightbox-close">&times;</button>
    <button class="lightbox-prev">&#10094;</button>
    <img src="" alt="صورة مكبرة">
    <button class="lightbox-next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".lightbox-close");
const prevBtn = lightbox.querySelector(".lightbox-prev");
const nextImageBtn = lightbox.querySelector(".lightbox-next");

// عرض الصورة
function showImage(index) {

    currentImageIndex = index;

    lightboxImage.src = galleryImages[index].src;

    lightbox.classList.add("show");
}

// الضغط على الصور
galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        showImage(index);

    });

});

// إغلاق الصورة
closeBtn.addEventListener("click", function() {

    lightbox.classList.remove("show");

});

// الصورة التالية
nextImageBtn.addEventListener("click", function() {

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    showImage(currentImageIndex);

});

// الصورة السابقة
prevBtn.addEventListener("click", function() {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    showImage(currentImageIndex);

});

// الإغلاق بالضغط خارج الصورة
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

// الإغلاق بزر Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});
// الانتقال إلى شاشة الختام
finishBtn.addEventListener("click", function() {
    changeScreen(screen5, screen6);
});

// إعادة المفاجأة من البداية
restartBtn.addEventListener("click", function() {
    changeScreen(screen6, screen1);
});