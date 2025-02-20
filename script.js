document.addEventListener("DOMContentLoaded", function () {
  generateQuote();
});

const quotes = [
  "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air.",
  "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
  "Try and fail, but don’t fail to try.",
  "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
  "The influence of each human being on others in this life is a kind of immortality.",
];

function generateQuote() {
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}
