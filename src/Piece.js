import {
   pawnLegalMoves,
   rookLegalMoves,
   bishopLegalMoves,
   knightLegalMoves,
   queenLegalMoves,
   kingLegalMoves,
} from "./legalMoves.js";

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
         console.log("pawnLegalMoves");
         return pawnLegalMoves(this);
      } else if (this.name === "rook") {
         console.log("rookLegalMoves");
         return rookLegalMoves(this);
      } else if (this.name === "knight") {
         return knightLegalMoves(this);
      } else if (this.name === "bishop") {
         return bishopLegalMoves(this);
      } else if (this.name === "queen") {
         return queenLegalMoves(this);
      } else if (this.name === "king") {
         return kingLegalMoves(this);
      }
      return [];
   };
}

export default Piece;
