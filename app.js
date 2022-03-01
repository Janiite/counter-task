let counter = document.getElementById("counter");
let result = 0;
if (result === 0) {
  counter.addEventListener("click", counting);

  let display = document.getElementById("display");

  function counting() {
    result++;
    display.textContent = result;
    if (result === 1) {
        counter.textContent = "Eat!";
      const gameTime = setTimeout(game, 10000);

      function game() {
        alert("Game over! You ate " + result + " cookies");
        result = 0;
        display.textContent = result;
        counter.textContent = "Start!";
      }
    }
  }
}

