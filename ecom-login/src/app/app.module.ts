import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'src/app/helpers/auth.guard';
import { Role } from 'src/app/models/role';
import { FormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from 'src/app/helpers/fake-backend';
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import {  ErrorInterceptor } from 'src/app/helpers/error.interceptor';

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
import { AdminComponent } from './components/admin/admin.component';

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
    ProductItemComponent,
    AdminComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CountdownModule,
    NgbModule,
    MatGridListModule,
    CountUpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'firebaseConfig'),
    AngularFirestoreModule,

    RouterModule.forRoot([
      // { path:'',component:HomeComponent ,canActivate: [AuthGuard]},
      { path:'',component:HomeComponent},
      { path:'blog',component:BlogComponent},
      { path:'about',component:AboutComponent},
      { path:'wishlist',component:WishlistComponent},
      { path:'products',component:ProductsComponent},
      { path:'contactus',component:ContactUSComponent},
      { path:'shoppingcart',component:ShoppingCartComponent},
      { path:'login',component:LoginComponent},
      { path:'admin',component:AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
      { path:"**", component:NotFoundComponent}
    ]),
    
  ],
  providers: [AngularFirestore,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
