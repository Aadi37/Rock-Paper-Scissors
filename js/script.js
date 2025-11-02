let randomNumber = Math.floor(Math.random() * 3) + 1;

const buttons = Array.from(document.querySelectorAll('.btn-choose'));
const userSelect = document.querySelector('.userSelect');
const compuerSelect = document.querySelector('.compuerSelect');
const selectedImage = document.querySelector('.selectedImage');
const resultBox = document.querySelector('.result'); // ✅ make sure exists in HTML

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // --- User Selection ---
    const role = Number(button.dataset.role);
    const imgPath = button.querySelector('img').getAttribute('src');
    selectedImage.setAttribute('src', imgPath);

    // --- Computer Selection ---
    const computerBtn = buttons.find(b => Number(b.dataset.role) === randomNumber);
    const computerImg = computerBtn.querySelector('img').getAttribute('src');

    // ✅ Replace old computer image completely
compuerSelect.innerHTML = `<img src="${computerImg}" alt="Computer Choice" class="computerImage">`;

    // --- Determine Winner ---
    let resultText = '';
    if (role === randomNumber) {
      resultText = "😐 It's a Draw!";
    } else if (
      (role === 1 && randomNumber === 3) || // Rock beats Scissors
      (role === 2 && randomNumber === 1) || // Paper beats Rock
      (role === 3 && randomNumber === 2)    // Scissors beats Paper
    ) {
      resultText = "🎉 You Win!";
    } else {
      resultText = "😞 You Lose!";
    }

    // --- Show Result ---
    resultBox.textContent = resultText;

    // --- New Random Number for Next Round ---
    randomNumber = Math.floor(Math.random() * 3) + 1;
  });
});

