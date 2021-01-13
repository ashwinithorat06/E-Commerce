import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGFComponent } from './components/auth-gf/auth-gf.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { ContactUSComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from 'ngx-countdown';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CountUpModule } from 'ngx-countup';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartListComponent } from './components/shopping-cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/shopping-cart/cart-list/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    NotFoundComponent,
    AuthGFComponent,
    LogoutComponent,
    LoginComponent,
    ContactUSComponent,
    BlogComponent,
    CartComponent,
    WishlistComponent,
    ProductsComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartListComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CountdownModule,
    NgbModule,
    MatGridListModule,
    CountUpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'firebaseConfig'),
    AngularFirestoreModule,

    RouterModule.forRoot([
      { path:'',component:HomeComponent },
      { path:'blog',component:BlogComponent},
      { path:'about',component:AboutComponent},
      { path:'wishlist',component:WishlistComponent},
      { path:'products',component:ProductsComponent},
      { path:'contactus',component:ContactUSComponent},
      { path:'shoppingcart',component:ShoppingCartComponent},
      { path:'login',component:LoginComponent},
      { path:'logout',component:LogoutComponent},
      { path:"**", component:NotFoundComponent}
    ]),
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
