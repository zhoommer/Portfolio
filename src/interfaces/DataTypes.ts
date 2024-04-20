export interface coinTypes {
  index: number;
  name: string;
  price: string;
}

export interface dataTypes {
  search: string;
  coins: coinTypes[];
}
