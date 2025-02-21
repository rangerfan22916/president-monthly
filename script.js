document.addEventListener("DOMContentLoaded", function () {
  const achievements = document.querySelectorAll(".achievement");
  const image = document.getElementById("achievement-img");
  const caption = document.getElementById("achievement-caption");

  // Set default image and caption on page load
  image.src = "imgs/presidency.jpg";

  achievements.forEach((achievement) => {
    achievement.addEventListener("mouseover", function () {
      image.src = this.getAttribute("data-img");
    });

    achievement.addEventListener("mouseleave", function () {
      image.src = "imgs/presidency.jpg";
    });
  });

  const quotes = [
    "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    "Always vote for principle, though you may vote alone.",
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
  ];

  function generateQuote() {
    document.getElementById("quote").textContent =
      quotes[Math.floor(Math.random() * quotes.length)];
  }

  generateQuote();
});
