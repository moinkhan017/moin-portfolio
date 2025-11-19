let steps = document.querySelectorAll('.step');
let circles = document.querySelectorAll('.circle');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let currentStep = 0;

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});

function updateSteps() {
  steps.forEach((step, index) => {
    const circle = step.querySelector('.circle');
    if (index <= currentStep) {
      step.classList.add('active');
      circle.textContent = '✔';
    } else {
      step.classList.remove('active');
      circle.textContent = '✘';
    }
  });

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}
