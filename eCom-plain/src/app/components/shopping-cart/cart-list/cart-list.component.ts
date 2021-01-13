import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
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
  constructor(private msgService:MessengerService) { }

  ngOnInit(): void {
    this.msgService.getMsg().subscribe((product:Product)=>{
     this.addProductToCart(product);
    })
  }
  addProductToCart(product:Product){
    let productExists:boolean=false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productId=== product.id){
        this.cartItems[i].qty++;
        productExists=true;
        break;
        }
      }
    if(!productExists){
      this.cartItems.push({
            productId:product.id,
            productName:product.name,
            qty:1,
            price:product.price,
          })
    }

   // if(this.cartItems.length===0){
    //   this.cartItems.push({
    //     productId:product.id,
    //     productName:product.name,
    //     qty:1,
    //     price:product.price,
    //   })
    // }else{
    //   for(let i in this.cartItems){
    //     if(this.cartItems[i].productId=== product.id){
    //       this.cartItems[i].qty++
    //     }else{
    //       this.cartItems.push({
    //         productId:product.id,
    //         productName:product.name,
    //         qty:1,
    //         price:product.price,
    //       })
    //     }
    //   }
    // }

    ///cart TOTAL
    this.cartTotal=0;
    this.cartItems.forEach( item=>{
      this.cartTotal+=(item.qty*item.price)
    }) 
  }
  
    }
