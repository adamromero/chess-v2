import Piece from "./Piece.js";

let pieces = [];

for (let i = 0; i < 8; i++) {
   pieces.push(new Piece("pawn", "black", i + 8, "/pieces/bp.png"));
}

for (let i = 0; i < 8; i++) {
   pieces.push(new Piece("pawn", "white", i + 48, "/pieces/wp.png"));
}

pieces.push(new Piece("rook", "black", 0, "/pieces/br.png"));
pieces.push(new Piece("rook", "black", 7, "/pieces/br.png"));
pieces.push(new Piece("knight", "black", 1, "/pieces/bkn.png"));
pieces.push(new Piece("knight", "black", 6, "/pieces/bkn.png"));
pieces.push(new Piece("bishop", "black", 2, "/pieces/bb.png"));
pieces.push(new Piece("bishop", "black", 5, "/pieces/bb.png"));
pieces.push(new Piece("queen", "black", 3, "/pieces/bq.png"));
pieces.push(new Piece("king", "black", 4, "/pieces/bkg.png"));

pieces.push(new Piece("rook", "white", 56, "/pieces/wr.png"));
pieces.push(new Piece("rook", "white", 63, "/pieces/wr.png"));
pieces.push(new Piece("knight", "white", 57, "/pieces/wkn.png"));
pieces.push(new Piece("knight", "white", 62, "/pieces/wkn.png"));
pieces.push(new Piece("bishop", "white", 58, "/pieces/wb.png"));
pieces.push(new Piece("bishop", "white", 61, "/pieces/wb.png"));
pieces.push(new Piece("queen", "white", 59, "/pieces/wq.png"));
pieces.push(new Piece("king", "white", 60, "/pieces/wkg.png"));

export default pieces;
