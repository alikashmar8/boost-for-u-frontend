import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import { Section1Component } from './common/homepage/section1/section1.component';
import { Section2Component } from './common/homepage/section2/section2.component';
import { Section3Component } from './common/homepage/section3/section3.component';
import { Section4Component } from './common/homepage/section4/section4.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductCardComponent } from './cards/product-card/product-card.component';

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
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
