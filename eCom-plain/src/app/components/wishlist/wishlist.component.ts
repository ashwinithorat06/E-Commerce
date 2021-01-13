import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CartDataService } from 'src/app/services/cart-data.service';
import {map} from 'rxjs/operators';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
cartData:Observable<any>;

  constructor(private db:AngularFirestore,private service: CartDataService) { 
    // this.cartData=this.db.collection('cartData').valueChanges();
    // console.log(this.cartData)
  }

  ngOnInit(): void {
    this.cartData=this.service.getdata().snapshotChanges().pipe(map(
      data=>data.map(result=>{const id=result.payload.doc.id;
      let data=result.payload.doc.data() as Product;
    return {id, ...data}})
    ))
  }

}
