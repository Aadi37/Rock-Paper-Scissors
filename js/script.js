let randomNumber = Math.floor(Math.random() * 3) + 1;

const buttons = Array.from(document.querySelectorAll('.btn-choose'));
const userSelect = document.querySelector('.userSelect');
const compuerSelect = document.querySelector('.compuerSelect');
const selectedImage = document.querySelector('.selectedImage');
const resultBox = document.querySelector('.result'); // ✅ add this div in HTML

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // --- User Selection ---
    const role = Number(button.dataset.role);
    const imgPath = button.querySelector('img').getAttribute('src');
    selectedImage.setAttribute('src', imgPath);

    // --- Computer Selection ---
    const computerBtn = buttons.find(b => Number(b.dataset.role) === randomNumber);
    const computerImg = computerBtn.querySelector('img').getAttribute('src');

    // Clear old computer content
    // compuerSelect.innerHTML = `<h3>Computer Selected:</h3>`;

    // Append computer image
    const img = document.createElement('img');
    img.src = computerImg;
    img.alt = 'Computer Choice';
    img.classList.add('computerImage');
    compuerSelect.appendChild(img);

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

    // Show result
    resultBox.textContent = resultText;

    // Generate new random number for next round
    randomNumber = Math.floor(Math.random() * 3) + 1;
  });
});
