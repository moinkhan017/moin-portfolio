const lines = [
  "I’m Moin Khan, a final-year B.Tech Computer Science student and a full-stack developer specializing in the MERN stack.With a strong foundation in C++ and core web technologies, I approach problems analytically and translate them into efficient, production-ready solutions.",
  "I believe in learning through execution debugging deeply, and continuously refining my approach, so I build, break, and rebuild until it clicks.",
  "Outside of development, I focus on strengthening my problem-solving skills and writing cleaner, more efficient code through continuous practice and iteration.",
  "I am Analytical Passionate and Unstoppable"
];

let i = 0;
let j = 0;
let currentLine = '';
let displayedText = '';
const speed = 50;
const output = document.getElementById("typewriter");

function type() {
  if (!output)
  {
    console.error('Element with id "typewriter" not found.');
    return;
  }
  if (i < lines.length) {
    if (j < lines[i].length) {
      currentLine += lines[i].charAt(j);
      output.innerHTML = displayedText + currentLine + "<span class='blink'>|</span>";
      j++;
      setTimeout(type, speed);
    }else {
      displayedText += currentLine + "<br>";
      currentLine = '';
      j = 0;
      i++;
      setTimeout(type, 800);
    }
  } else {
    output.innerHTML = displayedText; // final output without cursor
  }
}

type();
