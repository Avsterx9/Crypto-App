export class UserToken{
  name: string;
  quantity: number;
  price: number;
  entryPrice:number;
  imageURL:string;

  constructor(name: string, quantity:number, price: number, entryPrice:number, imageURL: string,) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.entryPrice = entryPrice;
    this.imageURL = imageURL;
  }
}


export interface IUserTokenXLSX{
  name: string;
  quantity: number;
  price: number;
  entryPrice:number;
  sum:number;
}

export class UserTokenXLSX implements IUserTokenXLSX{
  name: string;
  price: number;
  entryPrice:number;
  quantity: number;
  sum: number;

  constructor(name:string, price:number, entryPrice:number, quantity:number, sum:number) {
    this.name = name;
    this.price = price;
    this.entryPrice = entryPrice;
    this.quantity = quantity;
    this.sum = sum;
  }

}
