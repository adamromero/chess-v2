class Piece {
   constructor(name, color, position, image) {
      this.id = 1;
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

   legalMoves = () => {
      if (this.name === "pawn") {
         //return this.pawnMoves();
      } else if (this.name === "rook") {
         //return this.rookMoves();
      }
      return [];
   };
}

export default Piece;
