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
         const position = this.position;
         return [position - 8, position - 16];
      } else if (this.name === "rook") {
         //return this.rookMoves();
         let moves = [];
         for (let i = 0; i < 8; i++) {
            moves.push(this.position - i * 8);
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
         let moves = [];
         for (let i = 1; i < 8; i++) {
            moves.push(this.position - i * 9);
            moves.push(this.position - i * 7);
            moves.push(this.position + i * 7);
            moves.push(this.position + i * 9);
         }
         return moves;
      }
      return [];
   };
}

export default Piece;
