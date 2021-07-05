import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminCategoriesComponent } from './admin/categories/admin-categories/admin-categories.component';
import { CreateCategoriesComponent } from './admin/categories/create-categories/create-categories.component';
import { EditCategoriesComponent } from './admin/categories/edit-categories/edit-categories.component';
import { AdminProductsComponent } from './admin/products/admin-products/admin-products.component';
import { CreateProductsComponent } from './admin/products/create-products/create-products.component';
import { ProductsEditComponent } from './admin/products/products-edit/products-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductCardComponent } from './cards/product-card/product-card.component';
import { AlertComponent } from './common/alert/alert.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomepageComponent } from './common/homepage/homepage/homepage.component';
import { Section1Component } from './common/homepage/section1/section1.component';
import { Section2Component } from './common/homepage/section2/section2.component';
import { Section3Component } from './common/homepage/section3/section3.component';
import { Section4Component } from './common/homepage/section4/section4.component';
import { Section5Component } from './common/homepage/section5/section5.component';
import { Section6Component } from './common/homepage/section6/section6.component';
import { LoadingScreenComponent } from './common/loading-screen/loading-screen.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    ProductCardComponent,
    HomepageComponent,
    AdminHomeComponent,
    AdminCategoriesComponent,
    CreateCategoriesComponent,
    LoadingScreenComponent,
    LoginComponent,
    AlertComponent,
    AdminProductsComponent,
    Section5Component,
    Section6Component,
    CreateProductsComponent,
    ProductsEditComponent,
    EditCategoriesComponent,
    ProductsComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
