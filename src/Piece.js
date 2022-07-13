import { pawnLegalMoves, bishopLegalMoves } from "./legalMoves.js";

class Piece {
   constructor(name, color, position, image) {
      this.id = Math.floor(Math.random() * Date.now());
      this.name = name;
      this.color = color;
      this.position = position;
      this.image = image;
   }

   getId = () => this.id;

   getName = () => this.name;

   getColor = () => this.color;

   getImage = () => this.image;

   getPosition = () => this.position;

   setPosition = (position) => (this.position = position);

   getLegalMoves = () => {
      if (this.name === "pawn") {
         return pawnLegalMoves(this);
      } else if (this.name === "rook") {
         let moves = [];
         const x = this.position[0];
         const y = this.position[1];
         for (let i = 0; i < 8; i++) {
            moves.push([x - i, y]);
         }
         return moves;
      } else if (this.name === "knight") {
         let moves = [];
         moves.push(this.position - 17);
         moves.push(this.position - 15);
         moves.push(this.position - 10);
         moves.push(this.position - 6);
         moves.push(this.position + 6);
         moves.push(this.position + 10);
         moves.push(this.position + 15);
         moves.push(this.position + 17);
         return moves;
      } else if (this.name === "bishop") {
         return bishopLegalMoves(this);
      }
      return [];
   };
}

export default Piece;
