import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 product:Product[]=[
  new Product(1,'Product 1','This is product 1 description',123),
  new Product(2,'Product 2','This is product 2 description',102),
  new Product(3,'Product 3','This is product 3 description',100),
  new Product(4,'Product 4','This is product 4 description',123),
  new Product(5,'Product 5','This is product 5 description',250),
  new Product(6,'Product 6','This is product 6 description',216),
  new Product(7,'Product 7','This is product 7 description',50),

]
  constructor() { }
  
  getProducts():Product[]{
 //TODO:populate data/items from API and return an observable
    return this.product;
  }
}
