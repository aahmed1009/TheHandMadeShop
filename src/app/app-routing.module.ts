import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CollectionOneComponent } from './collection-one/collection-one.component';
import { CollectionTwoComponent } from './collection-two/collection-two.component';
import { CollectionThreeComponent } from './collection-three/collection-three.component';
import { ProductsDetailsComponent } from './home/products-details/products-details.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'collection',
    component: CollectionComponent,
  },
  {
    path: 'collection-one',
    component: CollectionOneComponent,
  },
  {
    path: 'collection-two',
    component: CollectionTwoComponent,
  },
  {
    path: 'collection-three',
    component: CollectionThreeComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'products-details/:id', component: ProductsDetailsComponent },
  { path: 'update-user-profile/:id', component: UpdateUserProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
