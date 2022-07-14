import {
   isMoveOpen,
   getOpenMoves,
   getUnblockedMoves,
   getInBoundMoves,
} from "./openMoves.js";

const pawnLegalMoves = (piece) => {
   const x = piece.position[0];
   const y = piece.position[1];
   if (piece.color === "white") {
      if (x === 6) {
         return [
            [x - 1, y],
            [x - 2, y],
         ];
      } else {
         if (isMoveOpen([x - 1, y])) {
            return [[x - 1, y]];
         }
      }
   } else {
      if (x === 1) {
         return [
            [x + 1, y],
            [x + 2, y],
         ];
      } else {
         return [[x + 1, y]];
      }
   }
};

const rookLegalMoves = (piece) => {
   let moves = [];
   const x = piece.position[0];
   const y = piece.position[1];

   for (let i = 1; i < 8; i++) {
      moves.push([x + i, y]);
      moves.push([x - i, y]);
   }
   for (let i = 1; i < 8; i++) {
      moves.push([x, y + i]);
      moves.push([x, y - i]);
   }
   moves = getInBoundMoves(moves);
   moves = getUnblockedMoves(moves);
   return moves;
};

const bishopLegalMoves = (piece) => {
   let moves = [];
   const x = piece.position[0];
   const y = piece.position[1];
   for (let i = 1; i < 8; i++) {
      if (piece.color === "white") {
         moves.push([x - i, y - i]);
         moves.push([x - i, y + i]);
         moves.push([x + i, y - i]);
         moves.push([x + i, y + i]);
      } else {
         moves.push([x + i, y + i]);
         moves.push([x + i, y - i]);
         moves.push([x - i, y + i]);
         moves.push([x - i, y - i]);
      }
   }
   moves = getInBoundMoves(moves);
   moves = getOpenMoves(moves);
   moves = getUnblockedMoves(moves);
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
   moves = getOpenMoves(moves);
   return moves;
};

export { pawnLegalMoves, rookLegalMoves, bishopLegalMoves, knightLegalMoves };
