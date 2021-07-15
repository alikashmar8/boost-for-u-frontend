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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
