/* 
Project Requirements:

>> Change The Background Color By Generating Random RGB Color.

*/

// Steps:

// step-1: Create Onload handler


window.onload = () => {
      main();
    };

    function main() {
      const root = document.getElementById('root');
      const btn = document.getElementById('change-btn');

      let intervalId = null;

      btn.addEventListener('click', function () {
        if (intervalId === null) {
          // Start color changing
          intervalId = setInterval(() => {
            const bgColor = generateRGBColor();
            root.style.backgroundColor = bgColor;
          }, 300);
          btn.textContent = 'Stop Color';
        } else {
          // Stop color changing
          clearInterval(intervalId);
          intervalId = null;
          btn.textContent = "Let's Go";
        }
      });
    }
    // Random RGB color generator
    function generateRGBColor() {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`;
    }
// step-3: Collect all necessary reference
// step-3: handle the click event