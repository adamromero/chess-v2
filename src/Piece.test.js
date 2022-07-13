import Piece from "./Piece";

test("check legal moves of white pawn", () => {
   const piece = new Piece("pawn", "white", 48, "pawn.png");
   expect(piece.legalMoves()).toEqual([40, 32]);
});

test("check legal moves of black pawn", () => {
   const piece = new Piece("pawn", "black", 8, "pawn.png");
   expect(piece.legalMoves()).toEqual([16, 24]);
});

test("check legal moves of white rook", () => {
   const piece = new Piece("rook", "white", 56, "rook.png");
   expect(piece.legalMoves()).toEqual([56, 48, 40, 32, 24, 16, 8, 0]);
});
