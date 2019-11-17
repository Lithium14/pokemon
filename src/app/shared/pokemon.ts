export class Pokemon {
  name: string;
  imageUrl: string;
  description: string;

  constructor(input?: Pokemon) {
    Object.assign(this, input);
  }
}
