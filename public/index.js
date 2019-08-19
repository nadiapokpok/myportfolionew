/*---------------------script pour la nav barre---------------------*/

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//refactorisation canvas compétences

const maDivA = document.getElementById('canvas1');
const maDivB = document.getElementById('canvas2');
const maDivC = document.getElementById('canvas3');
const maDivD = document.getElementById('canvas4');
const maDivE = document.getElementById('canvas5');
const maDivF = document.getElementById('canvas6');
const maDivG = document.getElementById('canvas7');
const maDivH = document.getElementById('canvas8');
const maDivI = document.getElementById('canvas9');
const maDivJ = document.getElementById('canvas10');

function machin(argId, argP, arAngle, argTech) {
  var canvas = argId;
  var ctx = canvas.getContext('2d');
  var color = '#0C9BE2';
  var width = canvas.width;// width of canvas
  canvas.height = width + 50;
  var height = canvas.height;
  var percent = argP;

  var status = argTech;
  var counter = 0;
  // ---- End defination of variables ---
  // ------------------------------------
  function baseCir() {
    ctx.beginPath();
    ctx.lineWidth = width / 23;
    ctx.strokeStyle = "#FFF";

    ctx.arc(width / 2, width / 2, width / 3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }
  // ----------------------------
  // ---- Drawing the circle Begin ----
  setTimeout(function draw() {

    var angle = Math.PI * 1.5 + Math.PI * arAngle * counter / 100;
    ctx.clearRect(0, 0, width, height);
    baseCir();
    ctx.beginPath();
    ctx.lineWidth = width / 14;
    ctx.arc(width / 2, width / 2, width / 3, 1.5 * Math.PI, angle);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    // ---- Drawing the circle End ----
    // --------------------------------
    // ---- fill the text Begin ----
    ctx.fillStyle = color;
    ctx.font = width / 6 + "px Arial";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(counter + "%", width / 2, width / 2);
    ctx.fillText(status, width / 2, height - 25);
    counter++;
    if (counter <= percent) {
      setTimeout(draw, 20);
    }
  }, 20);
}

machin(maDivA, 85, 2, "HTML");
machin(maDivB, 50, 2.6, "CSS/Sass");
machin(maDivC, 30, 2.6, "JS");
machin(maDivD, 25, 2.6, "React");
machin(maDivE, 30, 2.6, "Angular");
machin(maDivF, 30, 2.6, "nodeJS");
machin(maDivG, 30, 2.6, "MongoDB");
machin(maDivH, 30, 2.6, "Bootstrap");
machin(maDivI, 30, 2.6, "Wordpress");
machin(maDivJ, 20, 2.6, "PHP");

