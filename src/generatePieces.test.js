import pieces from "./generatePieces.js";

test("check if piece is a pawn", () => {
   const piece = pieces[0];
   expect(piece.getName()).toBe("pawn");
});
