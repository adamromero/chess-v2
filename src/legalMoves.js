import {
   isMoveOpen,
   getOpenMoves,
   getUnblockedMoves,
   getInBoundMoves,
   isOpponentPiece,
} from "./openMoves.js";

const pawnLegalMoves = (piece) => {
   let moves = [];
   const x = piece.position[0];
   const y = piece.position[1];
   if (piece.color === "white") {
      if (x === 6) {
         moves.push([x - 1, y]);
         moves.push([x - 2, y]);
         moves = getOpenMoves(moves);
         return moves;
      } else {
         if (isOpponentPiece([x - 1, y - 1], piece.color)) {
            moves.push([x - 1, y - 1]);
            moves = getOpenMoves(moves);
         }
         if (isOpponentPiece([x - 1, y + 1], piece.color)) {
            moves.push([x - 1, y + 1]);
            moves = getOpenMoves(moves);
         }
         if (isMoveOpen([x - 1, y])) {
            moves.push([x - 1, y]);
            moves = getOpenMoves(moves);
         }
         return moves;
      }
   } else {
      if (x === 1) {
         moves.push([x + 1, y]);
         moves.push([x + 2, y]);
         moves = getOpenMoves(moves);
         return moves;
      } else {
         if (isOpponentPiece([x + 1, y + 1], piece.color)) {
            moves.push([x + 1, y + 1]);
            moves = getOpenMoves(moves);
         }
         if (isOpponentPiece([x + 1, y - 1], piece.color)) {
            moves.push([x + 1, y - 1]);
            moves = getOpenMoves(moves);
         }
         if (isMoveOpen([x + 1, y])) {
            moves.push([x + 1, y]);
            moves = getOpenMoves(moves);
         }
         return moves;
      }
   }
};

const rookLegalMoves = (piece) => {
   let moves = [];
   let topMoves = [];
   let bottomMoves = [];
   let leftMoves = [];
   let rightMoves = [];

   const x = piece.position[0];
   const y = piece.position[1];

   for (let i = x - 1; i >= 0; i--) {
      topMoves.push([i, y]);
   }

   for (let i = x + 1; i < 8; i++) {
      bottomMoves.push([i, y]);
   }

   for (let i = y - 1; i >= 0; i--) {
      leftMoves.push([x, i]);
   }

   for (let i = y + 1; i < 8; i++) {
      rightMoves.push([x, i]);
   }

   moves = [
      ...getUnblockedMoves(topMoves, piece.color),
      ...getUnblockedMoves(bottomMoves, piece.color),
      ...getUnblockedMoves(leftMoves, piece.color),
      ...getUnblockedMoves(rightMoves, piece.color),
   ];

   moves = getInBoundMoves(moves);
   return moves;
};

const bishopLegalMoves = (piece) => {
   let moves = [];
   const x = piece.position[0];
   const y = piece.position[1];

   let topLeftMoves = [];
   let topRightMoves = [];
   let bottomLeftMoves = [];
   let bottomRightMoves = [];

   for (let i = 1; i < 8; i++) {
      topLeftMoves.push([x - i, y - i]);
      topRightMoves.push([x + i, y - i]);
      bottomLeftMoves.push([x - i, y + i]);
      bottomRightMoves.push([x + i, y + i]);
   }

   moves = [
      ...getUnblockedMoves(getInBoundMoves(topLeftMoves), piece.color),
      ...getUnblockedMoves(getInBoundMoves(topRightMoves), piece.color),
      ...getUnblockedMoves(getInBoundMoves(bottomLeftMoves), piece.color),
      ...getUnblockedMoves(getInBoundMoves(bottomRightMoves), piece.color),
   ];

   return moves;
};

const knightLegalMoves = (piece) => {
   let moves = [];
   const x = piece.position[0];
   const y = piece.position[1];
   moves.push([x - 1, y - 2]);
   moves.push([x - 2, y - 1]);
   moves.push([x - 2, y + 1]);
   moves.push([x - 1, y + 2]);
   moves.push([x + 1, y + 2]);
   moves.push([x + 2, y + 1]);
   moves.push([x + 2, y - 1]);
   moves.push([x + 1, y - 2]);
   moves = getInBoundMoves(moves);
   moves = getOpenMoves(moves, piece.color);
   return moves;
};

const queenLegalMoves = (piece) => {
   return [...rookLegalMoves(piece), ...bishopLegalMoves(piece)];
};

const kingLegalMoves = (piece) => {
   let moves = [];
   const x = piece.position[0];
   const y = piece.position[1];
   moves.push([x - 1, y - 1]);
   moves.push([x - 1, y]);
   moves.push([x - 1, y + 1]);
   moves.push([x, y - 1]);
   moves.push([x, y + 1]);
   moves.push([x + 1, y - 1]);
   moves.push([x + 1, y]);
   moves.push([x + 1, y + 1]);
   moves = getInBoundMoves(moves);
   moves = getOpenMoves(moves, piece.color);
   return moves;
};

export {
   pawnLegalMoves,
   rookLegalMoves,
   bishopLegalMoves,
   knightLegalMoves,
   queenLegalMoves,
   kingLegalMoves,
};
