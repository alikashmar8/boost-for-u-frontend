import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../models/product.model';

// @ts-ignore
declare var StripeCheckout: StripeCheckoutStatic;

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.css'],
})
export class StripeCheckoutComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  @Input() product: Product;

  // @ts-ignore
  handler: StripeCheckoutHandler;

  @Output() newItemEvent = new EventEmitter<any>();


  confirmation: any;
  loading = false;

  ngOnInit(): void {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_51HywjtC3KTL075dc7SinoPGVzLwNpsnyvTgklzfqRZk2AOiJPBOg9EuRuLH9fjs9lAOGx2cHdgl3FsCc7uvhrl9r00LV8rGkuB',
      locale: 'auto',
      zipCode: true,
      shippingAddress: true,
      billingAddress: true,
      currency: 'USD',
      amount: this.product.price,
      name: this.product.name,
      source: async (source: any) => {
        this.loading = true;
        // response details after payment
        // console.log(source);
        this.newItemEvent.emit(source);
        this.loading = false;
      },
    });
  }

  async checkout(e: any) {
    this.handler.open({
      amount: this.product.price * 100,
      name: this.product.name,
      currency: 'USD',
      shippingAddress: true,
      billingAddress: true,
      zipCode: true,
    });
  }
}
