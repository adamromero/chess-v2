import pieces from "./generatePieces.js";

let boardElement = document.getElementById("board");
const MAX_ROWS = 8;
const MAX_COLS = 8;

const generateBoard = () => {
   let board = "";
   let cellColor = "";

   for (let row = 0; row < MAX_ROWS; row++) {
      for (let col = 0; col < MAX_COLS; col++) {
         if (row % 2 === 0) {
            cellColor = col % 2 === 0 ? "" : "black";
         } else {
            cellColor = col % 2 !== 0 ? "" : "black";
         }

         board += `<div class='cell ${cellColor}' data-index=${
            row * MAX_COLS + col
         }></div>`;
      }
   }

   boardElement.innerHTML = board;
};

const placeChessPieces = () => {
   pieces.forEach((piece) => {
      const cell = document.querySelector(
         `[data-index='${piece.getPosition()}']`
      );
      cell.innerHTML = `<img src='${piece.getImage()}' alt='${piece.getName()}' />`;
   });
};

const addEventListeners = () => {
   const cells = document.querySelectorAll(".cell");
   cells.forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
   });
};

const handleCellClick = (e) => {
   const cell = e.target;
   if (!cell.classList.contains("cell")) {
      console.log(cell);
      const cellIndex = cell.parentNode.getAttribute("data-index");
      const piece = pieces.find((p) => p.getPosition() === Number(cellIndex));

      if (piece) {
         console.log(piece.getName());
      }
   }
};

const init = () => {
   generateBoard();
   placeChessPieces();
   addEventListeners();
};

init();
