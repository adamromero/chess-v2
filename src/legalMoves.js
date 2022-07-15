import {
   isMoveOpen,
   getOpenMoves,
   getUnblockedMoves,
   getInBoundMoves,
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
         if (isMoveOpen([x - 1, y])) {
            moves.push([x - 1, y]);
            moves = getOpenMoves(moves);
            return moves;
         }
      }
   } else {
      if (x === 1) {
         moves.push([x + 1, y]);
         moves.push([x + 2, y]);
         moves = getOpenMoves(moves);
         return moves;
      } else {
         if (isMoveOpen([x + 1, y])) {
            moves.push([x + 1, y]);
            moves = getOpenMoves(moves);
            return moves;
         }
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
      ...getUnblockedMoves(topMoves),
      ...getUnblockedMoves(bottomMoves),
      ...getUnblockedMoves(leftMoves),
      ...getUnblockedMoves(rightMoves),
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
      ...getUnblockedMoves(getInBoundMoves(topLeftMoves)),
      ...getUnblockedMoves(getInBoundMoves(topRightMoves)),
      ...getUnblockedMoves(getInBoundMoves(bottomLeftMoves)),
      ...getUnblockedMoves(getInBoundMoves(bottomRightMoves)),
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
   moves = getOpenMoves(moves);
   return moves;
};

const queenLegalMoves = (piece) => {
   let moves = [];
   moves = [...rookLegalMoves(piece), ...bishopLegalMoves(piece)];
   return moves;
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
   moves = getOpenMoves(moves);
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
