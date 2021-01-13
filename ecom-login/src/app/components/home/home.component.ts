import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { first } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {  AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  // loading = false;
  // currentUser: User;
  // userFromApi: User;

  showNavigationArrows = true;
   showNavigationIndicators = true;


  constructor(config: NgbCarouselConfig, private userService: UserService,
    private authenticationService: AuthenticationService,private route:Router) {
    this.currentUser = this.authenticationService.currentUserValue;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  
  ngOnInit(): void {
    // this.loading = true;
    //     this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    //         this.loading = false;
    //         this.userFromApi = user;
    //     });
  }
  shoppingCart(){
    if(this.currentUser){
      this.route.navigate(['/shoppingcart'])
    }
    else{
      this.route.navigate(['/login'])
    }
  }
}
