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

   boardElement.addEventListener("mouseout", (e) => {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
         if (!cell.classList.contains("highlight")) {
            cell.classList.remove("highlight");
         }
      });
   });
};

const removeAllSelected = () => {
   const cells = document.querySelectorAll(".cell");
   cells.forEach((cell) => {
      cell.classList.remove("selected");
   });
};

const removeAllHighlight = () => {
   const cells = document.querySelectorAll(".cell");
   cells.forEach((cell) => {
      cell.classList.remove("highlight");
   });
};

const handleCellClick = (e) => {
   const cell = e.target;
   //check if cell contains a piece
   if (!cell.classList.contains("cell")) {
      const cellIndex = cell.parentNode.getAttribute("data-index");
      const selectedPiece = pieces.find(
         (p) => p.getPosition() === parseInt(cellIndex)
      );

      if (selectedPiece) {
         if (cell.parentNode.classList.contains("selected")) {
            removeAllSelected();
            removeAllHighlight();
         } else {
            removeAllSelected();
            removeAllHighlight();
            cell.parentNode.classList.add("selected");
            selectedPiece.legalMoves().forEach((move) => {
               const cell = document.querySelector(`[data-index='${move}']`);
               cell.classList.add("highlight");
            });
         }
      }
   }
};

const init = () => {
   generateBoard();
   placeChessPieces();
   addEventListeners();
};

init();
