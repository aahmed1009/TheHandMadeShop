import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CollectionOneComponent } from './collection-one/collection-one.component';
import { CollectionTwoComponent } from './collection-two/collection-two.component';
import { CollectionThreeComponent } from './collection-three/collection-three.component';
import { OurProductsComponent } from './home/our-products/our-products.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './home/products-details/products-details.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CollectionComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent,
    CollectionOneComponent,
    CollectionTwoComponent,
    CollectionThreeComponent,
    OurProductsComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    ProductsDetailsComponent,
    UpdateUserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
