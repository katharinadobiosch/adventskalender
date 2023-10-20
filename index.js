let snowflakesCount = 200;

if (typeof total !== "undefined") {
  snowflakesCount = total;
}

// Creating snowflakes
function spawnSnow(snowDensity = 200) {
  snowDensity -= 1;

  for (let x = 0; x < snowDensity; x++) {
    let board = document.createElement("div");
    board.className = "snowflake";

    document.getElementById("snow").appendChild(board);
  }
}

// Append style for each snowflake to the head
function addCss(rule) {
  let css = document.createElement("style");
  css.type = "text/css";
  css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}

// Math
function randomInt(value = 100) {
  return Math.floor(Math.random() * value) + 1;
}

function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create style for snowflake
function spawnSnowCSS(snowDensity = 200) {
  let snowflakeName = "snowflake";
  let rule = ``;
  if (typeof baseCss !== "undefined") {
    rule = baseCss;
  }

  for (let i = 1; i < snowDensity; i++) {
    let randomX = Math.random() * 100; // vw
    let randomOffset = randomRange(-100000, 100000) * 0.0001; // vw;
    let randomXEnd = randomX + randomOffset;
    let randoXEndYoyo = randomX + randomOffset / 2;
    let randomYoyoTime = randomRange(30000, 80000) / 100000;
    let randomYoyoY = randomYoyoTime * 100; // vh
    let randomScale = Math.random();
    let fallDuration = randomRange(10, 30) * 1; // s
    let fallDelay = randomInt(30) * -1; // s
    let opacity = Math.random();

    rule += `
        .${snowflakeName}:nth-child(${i}) {
            opacity: ${opacity};
            transform: translate(${randomX}vw, -10px) scale(${randomScale});
            animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${randomYoyoTime * 100}% {
                transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
            }

            to {
                transform: translate(${randoXEndYoyo}vw, 100vh) scale(${randomScale});
            }
            
        }
        `;
  }

  addCss(rule);
}

window.onload = function () {
  spawnSnowCSS(snowflakesCount);
  spawnSnow(snowflakesCount);
};

var HTML =
  '<div class="article" onclick=""><div class="box closedDoor"><h2>@@@</h2></div><div class="present"><div class="bauble">?</div></div></div>';
var dateObj = new Date();
var monthNo = dateObj.getMonth();
var dayNo = dateObj.getDate();
var adventBoxesHTML = "";
var newHTML = "";
var doorNumbers = [...Array(24).keys()].map((i) => i + 1);
shuffleArray(doorNumbers); // Shuffle the door numbers

for (vv = 0; vv < 24; vv++) {
  // Changed the loop start and condition
  newHTML = HTML.replace("@@@", doorNumbers[vv]); // Use shuffled door numbers
  if (doorNumbers[vv] <= dayNo) {
    newHTML = newHTML.replace("closedDoor", "openDoor");
    newHTML = newHTML.link(
      "https://morenutrition.de/products/chunky-flavour-probe?variant=37632926122148"
    );
  }
  adventBoxesHTML += newHTML;
}
document.getElementById("adventBoxes").innerHTML = adventBoxesHTML;

// Function to shuffle the array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
