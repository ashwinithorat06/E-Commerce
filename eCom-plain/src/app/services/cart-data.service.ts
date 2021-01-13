import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  cartData;
  cartColl:AngularFirestoreCollection<Product>;
  cartDoc:AngularFirestoreDocument<Product>;
  constructor(private db:AngularFirestore) { 
    this.cartColl=this.db.collection('cartData');
  }
   getdata(){
    return this.db.collection('todoList');
   }
}
