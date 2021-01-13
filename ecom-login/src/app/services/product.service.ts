import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  productUrl } from 'src/app/config/api';
// const apiUrl= 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

//  product:Product[]=[
//   new Product(1,'Product 1','This is product 1 description',123),
//   new Product(2,'Product 2','This is product 2 description',102),
//   new Product(3,'Product 3','This is product 3 description',100),
//   new Product(4,'Product 4','This is product 4 description',123),
//   new Product(5,'Product 5','This is product 5 description',250),
//   new Product(6,'Product 6','This is product 6 description',216),
//   new Product(7,'Product 7','This is product 7 description',50),

// ]
  constructor(private http:HttpClient) { }
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
