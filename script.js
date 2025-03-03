document.addEventListener("DOMContentLoaded", () => {
  const achievements = document.querySelectorAll(".achievement");
  const image = document.getElementById("achievement-img");

  // Ensure default image loads properly
  if (image) image.src = "imgs/presidency.jpg";

  achievements.forEach((achievement) => {
    achievement.addEventListener("mouseover", () => {
      image.src = achievement.getAttribute("data-img");
    });

    achievement.addEventListener("mouseleave", () => {
      image.src = "imgs/presidency.jpg";
    });
  });

  const quotes = [
    "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    "Always vote for principle, though you may vote alone.",
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
  ];

  const quoteElement = document.getElementById("quote");

  function generateQuote() {
    if (quoteElement) {
      quoteElement.textContent =
        quotes[Math.floor(Math.random() * quotes.length)];
    }
  }

  // Generate a quote on page load
  generateQuote();

  const quoteButton = document.querySelector(".btn-light");
  if (quoteButton) quoteButton.addEventListener("click", generateQuote);
});
