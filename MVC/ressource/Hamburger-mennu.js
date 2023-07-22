const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenuItems = document.querySelectorAll(".close-menu");

hamburger.addEventListener("click", (event) => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

closeMenuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


//Sileshow für header
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementById("slideshow").getElementsByTagName("img");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Ändert das Bild alle 3 Sekunden
        }
    