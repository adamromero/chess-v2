import Piece from "./Piece.js";

let pieces = [];

for (let i = 0; i < 8; i++) {
   pieces.push(new Piece("pawn", "black", [1, i], "/pieces/bp.png"));
}

for (let i = 0; i < 8; i++) {
   pieces.push(new Piece("pawn", "white", [6, i], "/pieces/wp.png"));
}

pieces.push(new Piece("rook", "black", [0, 0], "/pieces/br.png"));
pieces.push(new Piece("rook", "black", [0, 7], "/pieces/br.png"));
pieces.push(new Piece("knight", "black", [0, 1], "/pieces/bkn.png"));
pieces.push(new Piece("knight", "black", [0, 6], "/pieces/bkn.png"));
pieces.push(new Piece("bishop", "black", [0, 2], "/pieces/bb.png"));
pieces.push(new Piece("bishop", "black", [0, 5], "/pieces/bb.png"));
pieces.push(new Piece("queen", "black", [0, 3], "/pieces/bq.png"));
pieces.push(new Piece("king", "black", [0, 4], "/pieces/bkg.png"));

pieces.push(new Piece("rook", "white", [7, 0], "/pieces/wr.png"));
pieces.push(new Piece("rook", "white", [7, 7], "/pieces/wr.png"));
pieces.push(new Piece("knight", "white", [7, 1], "/pieces/wkn.png"));
pieces.push(new Piece("knight", "white", [7, 6], "/pieces/wkn.png"));
pieces.push(new Piece("bishop", "white", [7, 2], "/pieces/wb.png"));
pieces.push(new Piece("bishop", "white", [7, 5], "/pieces/wb.png"));
pieces.push(new Piece("queen", "white", [7, 3], "/pieces/wq.png"));
pieces.push(new Piece("king", "white", [7, 4], "/pieces/wkg.png"));

export default pieces;
