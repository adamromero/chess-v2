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
      moves.push([x + i, y + i]);
      moves.push([x + i, y - i]);
      moves.push([x - i, y + i]);
      moves.push([x - i, y - i]);
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

const queenLegalMoves = (piece) => {
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

   for (let i = 1; i < 8; i++) {
      moves.push([x + i, y + i]);
      moves.push([x + i, y - i]);
      moves.push([x - i, y + i]);
      moves.push([x - i, y - i]);
   }

   moves = getInBoundMoves(moves);
   moves = getOpenMoves(moves);
   moves = getUnblockedMoves(moves);
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
