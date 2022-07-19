import boardMap from "./boardMap.js";

export const isMoveOpen = (move) => {
   const x = move[0];
   const y = move[1];
   return boardMap[x][y] === "";
};

export const isOpponentPiece = (move, color) => {
   const x = move[0];
   const y = move[1];
   if (boardMap[x][y] !== "") {
      if (!boardMap[x][y].includes(color)) {
         return true;
      }
   }
   return false;
};

export const getOpenMoves = (moves, color) => {
   let openMoves = [];
   for (let i = 0; i < moves.length; i++) {
      if (isMoveOpen(moves[i]) || isOpponentPiece(moves[i], color)) {
         openMoves.push(moves[i]);
      }
   }
   return openMoves;
};

export const getUnblockedMoves = (moves, color) => {
   let openMoves = [];
   let isOpponentPieceFound = false;
   for (let i = 0; i < moves.length; i++) {
      isOpponentPiece(moves[i], color);
      if (isMoveOpen(moves[i])) {
         openMoves.push(moves[i]);
      } else if (isOpponentPiece(moves[i], color) && !isOpponentPieceFound) {
         openMoves.push(moves[i]);
         isOpponentPieceFound = true;
      } else {
         break;
      }
   }

   return openMoves;
};

export const getInBoundMoves = (moves) => {
   let inBoundMoves = [];
   for (let i = 0; i < moves.length; i++) {
      const x = moves[i][0];
      const y = moves[i][1];
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
         inBoundMoves.push(moves[i]);
      }
   }

   return inBoundMoves;
};
