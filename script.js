let score = 0;
const button = document.getElementById("btn");
const scoreText = document.getElementById("score");

button.addEventListener("click", function() {
  score++;
  scoreText.textContent = "スコア: " + score;
});
