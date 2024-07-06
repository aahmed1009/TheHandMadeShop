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
import { AdminRoleComponent } from './admin-role/admin-role.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { EditDeleteProductComponent } from './dashboard/edit-delete-product/edit-delete-product.component';
import { UserProductsComponent } from './dashboard/user-products/user-products.component';
import { OrdersManagementComponent } from './dashboard/orders-management/orders-management.component';
import { EditSpecificProductComponent } from './dashboard/edit-specific-product/edit-specific-product.component';
import { CategoriesManagementComponent } from './dashboard/categories-management/categories-management.component';
import { ReviewsManagementComponent } from './dashboard/reviews-management/reviews-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderDetailsComponent } from './dashboard/order-details/order-details.component';
import { EditOrderComponent } from './dashboard/edit-order/edit-order.component';

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
  {
    path: 'update-user-profile',
    component: UpdateUserProfileComponent,
  },
  {
    path: 'admin-role',
    component: AdminRoleComponent,
    canActivate: [AuthGuard],
    data: { role: ['admin'] },
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'products-details/:id', component: ProductsDetailsComponent },
  { path: 'update-user-profile/:id', component: UpdateUserProfileComponent },
  { path: 'cart', component: CartComponent },
  // Dashboard routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: ['user', 'admin'] },
    children: [
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-delete-product', component: EditDeleteProductComponent },
      { path: 'user-products', component: UserProductsComponent },
      {
        path: 'edit-specific-product/:id',
        component: EditSpecificProductComponent,
      },
      { path: 'orders-management', component: OrdersManagementComponent },
      {
        path: 'categories-management',
        component: CategoriesManagementComponent,
      },
      { path: 'reviews-management', component: ReviewsManagementComponent },
      { path: 'user-management', component: OrdersManagementComponent },
      { path: '', redirectTo: 'add-product', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
