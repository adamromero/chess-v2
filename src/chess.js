import pieces from "./generatePieces.js";
import boardMap from "./boardMap.js";

let boardElement = document.getElementById("board");
const MAX_ROWS = 8;
const MAX_COLS = 8;
const players = ["white", "black"];
let turn = 0;

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

         board += `<div class='cell ${cellColor}' data-index=${[
            row,
            col,
         ]}></div>`;
      }
   }

   boardElement.innerHTML = board;
};

const clearBoard = () => {
   for (let row = 0; row < MAX_ROWS; row++) {
      for (let col = 0; col < MAX_COLS; col++) {
         boardMap[row][col] = "";
      }
   }
};

const updateBoard = () => {
   clearBoard();
   pieces.forEach((piece) => {
      const x = piece.getPosition()[0];
      const y = piece.getPosition()[1];
      boardMap[x][y] = `${piece.getName()}_${piece.getColor()}`;
   });
};

const placeChessPieces = () => {
   pieces.forEach((piece) => {
      const x = piece.getPosition()[0];
      const y = piece.getPosition()[1];
      const cell = document.querySelector(`[data-index='${[x, y]}']`);
      cell.innerHTML = `<img class="piece ${piece.getColor()}" src='${piece.getImage()}' alt='${piece.getId()}' />`;
   });
};

const addEventListeners = () => {
   const cells = document.querySelectorAll(".cell");
   cells.forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
   });
};

const highlightEventListener = (e) => {
   const highlight = document.querySelectorAll(".highlight");
   highlight.forEach((highlight) => {
      highlight.addEventListener("click", (e) => {
         const selectedHighlight = e.target;

         //console.log(selectedHighlight);

         if (selectedHighlight.classList.contains("highlight")) {
            const selectedPieceElement =
               document.querySelector(".selected").childNodes[0];

            selectedHighlight.appendChild(selectedPieceElement);
            const index = selectedHighlight
               .getAttribute("data-index")
               .split(",");
            const newPosition = [parseInt(index[0]), parseInt(index[1])];
            const selectedPiecePosition = document
               .querySelector(".selected")
               .getAttribute("data-index")
               .split(",");
            const selectedPiece = getSelectedPiece(selectedPiecePosition);
            selectedPiece.setPosition(newPosition);
            updateBoard();
            removeAllSelected();
            removeAllHighlight();
            turn++;
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

const getSelectedPiece = (selectedPiecePosition) => {
   const selectedPiece = pieces.find((p) => {
      return (
         p.getPosition()[0] === parseInt(selectedPiecePosition[0]) &&
         p.getPosition()[1] === parseInt(selectedPiecePosition[1])
      );
   });

   return selectedPiece;
};

const handleCellClick = (e) => {
   const cell = e.target;
   if (cell.classList.contains(players[turn % 2])) {
      if (cell.classList.contains("piece")) {
         const selectedPiecePosition = cell.parentNode
            .getAttribute("data-index")
            .split(",");

         const selectedPiece = getSelectedPiece(selectedPiecePosition);
         if (selectedPiece) {
            if (cell.parentNode.classList.contains("selected")) {
               removeAllSelected();
               removeAllHighlight();
            } else {
               removeAllSelected();
               removeAllHighlight();
               cell.parentNode.classList.add("selected");

               let currentCell;
               const legalMoves = selectedPiece.getLegalMoves();

               legalMoves.forEach((move) => {
                  currentCell = document.querySelector(
                     `[data-index='${move}']`
                  );
                  currentCell.classList.add("highlight");
               });

               highlightEventListener();
            }
         }
      }
   }

   e.stopPropagation();
};

const init = () => {
   generateBoard();
   placeChessPieces();
   updateBoard();
   addEventListeners();
};

init();
