import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ContactusComponent } from './Components/ContactUs/contactus/contactus.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';

import { PaymentComponent } from './Components/payment/payment.component';
import { PaypalComponent } from './Components/paypal/paypal.component';

import { ProductSerComponent } from './Components/product-ser/product-ser.component';

import { ProductModule } from './Components/productDetiales/product/product.module';
import { ShopComponent } from './Components/productDetiales/product/shop/shop.component';
import { CustomerprofileComponent } from './Components/User/customerprofile/page/customerprofile.component';
import { LoginComponent } from './Components/User/login/login.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { SellerprofileComponent } from './Components/User/sellerprofile/page/sellerprofile.component';
import { ProfileGuard } from './Guards/profile.guard';
import { SellerGuardGuard } from './Guards/seller-guard.guard';
import { UserGuardGuard } from './Guards/user-guard.guard';

const routes: Routes =  [
      
    {path:"home" , component:HomeComponent},

    {path:"payment" , component:PaypalComponent,canActivate:[ProfileGuard]},

    {path:"contact" , component:ContactusComponent},
    {path:"mystore" , component:ProductSerComponent ,canActivate:[SellerGuardGuard]},

    {path:"admindashboard" , component:AdminComponent},

    {path:"addProduct" , component:AddProductComponent},
    {path:"editProduct/:PID" , component:EditProductComponent},
    {path:"products" ,
    loadChildren : ()=> import ('src/app/Components/productDetiales/product/product.module').then(m=> m.ProductModule)},
    {path:"user" ,
    loadChildren : ()=> import ('src/app/Components/User/model/user-module/user-module.module').then(m=>m.UserModuleModule )},
    {path:"shoppingcart" ,
    loadChildren : ()=> import ('src/app/Components/shoppingCart/cart/cart.module').then(m=> m.CartModule)},
    {path:"offer" , 
    loadChildren : ()=> import ('src/app/Components/offer/offer.module').then(m=> m.OfferModule)},  
    {path:"**", component:HomeComponent} 

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
