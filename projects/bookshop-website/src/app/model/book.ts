//http://immense-forest-87642.herokuapp.com/books
//looback 4
export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  reviews: number;
  rating:number;
  description?:string;
  image?: string;
  publishedDate:Date;
}

