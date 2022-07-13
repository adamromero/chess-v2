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
         return [[x - 1, y]];
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

const bishopLegalMoves = (piece) => {
   let moves = [];
   console.log(piece);
   for (let i = 1; i < 8; i++) {
      if (piece.color === "white") {
         moves.push(piece.position - i * 9);
         moves.push(piece.position - i * 7);
         moves.push(piece.position + i * 7);
         moves.push(piece.position + i * 9);
      } else {
         moves.push(piece.position + i * 9);
         moves.push(piece.position + i * 7);
         moves.push(piece.position - i * 7);
         moves.push(piece.position - i * 9);
      }
   }
   return moves;
};

export { pawnLegalMoves, bishopLegalMoves };
