import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()cartItem:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  notEmpty=true;
 
  remove(){
    console.log(this.cartItem.qty)   
    if(this.cartItem.qty>0){
      this.cartItem.qty--;
        this.notEmpty=true;
        
      
      if(this.cartItem.qty<=0){
        this.notEmpty=false;
      }
      console.log(this.cartItem.qty)
    }
   
}

  
}
