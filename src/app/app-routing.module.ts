import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
