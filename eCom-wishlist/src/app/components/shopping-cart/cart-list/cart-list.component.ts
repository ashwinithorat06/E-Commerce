import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems=[
    // { id:1,productId:3,productName:'prod1',qty:4,price:123 },
    // { id:2,productId:4,productName:'prod2',qty:2,price:100 },
    // { id:3,productId:2,productName:'prod3',qty:1,price:150 },
    // { id:4,productId:1,productName:'prod4',qty:5,price:200 }
  ];
  cartTotal=0;
  constructor(private msgService:MessengerService, private cartService:CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }
  handleSubscription(){
    this.msgService.getMsg().subscribe((product:Product)=>{
    this.loadCartItems();
     })
  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[] )=>{
    this.cartItems=items;
    this.calculateCartTotal();
  })
  }
  calculateCartTotal(){
  ///cart TOTAL
    this.cartTotal=0;
    this.cartItems.forEach( item=>{
    this.cartTotal+=(item.qty*item.price)
    }) 
  }
    }
