import boardMap from "./boardMap.js";

export const isMoveOpen = (move) => {
   const x = move[0];
   const y = move[1];
   return boardMap[x][y] === "";
};

export const getOpenMoves = (moves) => {
   let openMoves = [];
   for (let i = 0; i < moves.length; i++) {
      if (isMoveOpen(moves[i])) {
         openMoves.push(moves[i]);
      }
   }
   return openMoves;
};

export const getUnblockedMoves = (moves) => {
   let openMoves = [];
   for (let i = 0; i < moves.length; i++) {
      if (isMoveOpen(moves[i])) {
         openMoves.push(moves[i]);
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
