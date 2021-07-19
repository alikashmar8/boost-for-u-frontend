import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isLoading: boolean;
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productsService.getProductsByNumber(4).subscribe((res: any)=>{
      this.products = res;
      this.isLoading = false;
    }, (err: any)=> {
      console.log(err);
      this.isLoading = false;
    })
  }

}
