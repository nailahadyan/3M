document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let index = 0;
  let slideWidth = slider.clientWidth;

  function updateSlider() {
    slider.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length; // Geser ke kanan, ulang dari awal jika habis
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length; // Geser ke kiri, kembali ke akhir jika awal
    updateSlider();
  }

  // Auto geser setiap 3 detik
  let autoSlide = setInterval(nextSlide, 3000);

  // Tombol manual
  nextBtn.addEventListener("click", function () {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 3000);
  });

  prevBtn.addEventListener("click", function () {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 3000);
  });

  // Resize event
  window.addEventListener("resize", function () {
    slideWidth = slider.clientWidth;
    updateSlider();
  });
});
