import pieces from "./generatePieces.js";

let boardElement = document.getElementById("board");
const MAX_ROWS = 8;
const MAX_COLS = 8;
let boardArray = [
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
];

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

const updateBoard = () => {
   pieces.forEach((piece) => {
      const position = piece.getPosition();
      boardArray[position[0]][position[1]] = piece.getId();
   });
};

const placeChessPieces = () => {
   pieces.forEach((piece) => {
      const x = piece.getPosition()[0];
      const y = piece.getPosition()[1];
      const cell = document.querySelector(`[data-index='${[x, y]}']`);
      cell.innerHTML = `<img src='${piece.getImage()}' alt='${piece.getId()}' />`;
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
      const cellIndex = cell.parentNode.getAttribute("data-index").split(",");

      const selectedPiece = pieces.find((p) => {
         return (
            p.getPosition()[0] === parseInt(cellIndex[0]) &&
            p.getPosition()[1] === parseInt(cellIndex[1])
         );
      });

      if (selectedPiece) {
         if (cell.parentNode.classList.contains("selected")) {
            removeAllSelected();
            removeAllHighlight();
         } else {
            removeAllSelected();
            removeAllHighlight();
            cell.parentNode.classList.add("selected");

            const legalMoves = selectedPiece.getLegalMoves();
            if (legalMoves.length > 1) {
               legalMoves.forEach((move) => {
                  const cell = document.querySelector(`[data-index='${move}']`);
                  cell.classList.add("highlight");
               });
            } else {
               const cell = document.querySelector(
                  `[data-index='${legalMoves[0]}']`
               );
               cell.classList.add("highlight");
            }

            document.querySelectorAll(".highlight").forEach((highlight) => {
               highlight.addEventListener("click", (e) => {
                  const selectedPieceElement = cell.parentNode.childNodes[0];
                  if (highlight.classList.contains("highlight")) {
                     highlight.appendChild(selectedPieceElement);
                     const index = highlight
                        .getAttribute("data-index")
                        .split(",");
                     const newPosition = [
                        parseInt(index[0]),
                        parseInt(index[1]),
                     ];
                     selectedPiece.setPosition(newPosition);
                     removeAllSelected();
                     removeAllHighlight();
                  }
               });
            });
         }
      }
   }
};

const init = () => {
   generateBoard();
   placeChessPieces();
   updateBoard();
   addEventListeners();
};

init();
