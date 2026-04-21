const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.querySelector(".profile-pic img");

    imgElement.style.transition = "opacity 0.3s ease";
    imgElement.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];

        imgElement.style.opacity = "1";
    }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.querySelector(".profile-pic");

    profilePic.style.cursor = "pointer";

    profilePic.addEventListener("click", changeImage);
});