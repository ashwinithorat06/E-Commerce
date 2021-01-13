import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  all:boolean=true;
  veg:boolean=false;
  fruit:boolean=false;
  juice:boolean=false;
  nut:boolean=false;
  
  showNavigationArrows = true;
  showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
 
  ngOnInit(): void {
    }
  All(){
    this.all=true;
    this.veg=false;
    this.fruit=false;
    this.juice=false;
    this.nut=false;
  }
  Veg(){
    this.all=false;
    this.veg=true;
    this.fruit=false;
    this.juice=false;
    this.nut=false;
  }
  Fruit(){
    this.all=false;
    this.veg=false;
    this.fruit=true;
    this.juice=false;
    this.nut=false;
  }
  Juice(){
    this.all=false;
    this.veg=false;
    this.fruit=false;
    this.juice=true;
    this.nut=false;
  }
  Nut(){
    this.all=false;
    this.veg=false;
    this.fruit=false;
    this.juice=false;
    this.nut=true;
  }
  }
  

