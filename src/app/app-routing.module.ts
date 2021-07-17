import { RefundPolicyComponent } from './pages/refund-policy/refund-policy.component';
import { TermsOfServicesComponent } from './pages/terms-of-services/terms-of-services.component';
import { ShippingPolicyComponent } from './pages/shipping-policy/shipping-policy.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RequestPersonalDataComponent } from './pages/request-personal-data/request-personal-data.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminCategoriesComponent } from './admin/categories/admin-categories/admin-categories.component';
import { CreateCategoriesComponent } from './admin/categories/create-categories/create-categories.component';
import { EditCategoriesComponent } from './admin/categories/edit-categories/edit-categories.component';
import { AdminProductsComponent } from './admin/products/admin-products/admin-products.component';
import { CreateProductsComponent } from './admin/products/create-products/create-products.component';
import { ProductsEditComponent } from './admin/products/products-edit/products-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './common/homepage/homepage/homepage.component';
import { AdminGuardService } from './guards/admin-guard.service';
import { AnonymousGuardService } from './guards/anonymous-guard.service';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShowOrderComponent } from './admin/show-order/show-order.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardService],
  },
  // admin routes
  {
    path: 'admin',
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductsComponent,
          },
          {
            path: 'create',
            component: CreateProductsComponent,
          },
          {
            path: 'edit/:id',
            component: ProductsEditComponent,
          },
        ],
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: AdminCategoriesComponent,
          },
          {
            path: 'create',
            component: CreateCategoriesComponent,
          },
          {
            path: 'edit/:id',
            component: EditCategoriesComponent,
          },
        ],
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'orders/:id',
        component: ShowOrderComponent
      }
    ],
    canActivate: [AdminGuardService],
  },
  // end admin routes

  // public products pages
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: ':id',
        component: ShowProductComponent,
      },
    ],
  },

  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'request-personal-data', component: RequestPersonalDataComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'shipping-policy', component: ShippingPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServicesComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
