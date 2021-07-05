import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { Product } from '../../../models/product.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  currentUser: User | null;
  isLoading: boolean;
  products: Product[];
  allProducts: Product[];
  search: string;
  categories: Category[] = [];
  searchCategory: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productsService.getAll().subscribe((res: any) => {
      this.products = res;
      this.allProducts = res;
      this.categoriesService.getAll().subscribe((res: any) => {
        this.categories = res;
        this.isLoading = false;
      });
    });
  }

  filterByCategory() {
    console.log(this.allProducts);
    if (this.searchCategory > 0) {
      this.products = this.allProducts.filter((product) => { 
        if (product.category.id == this.searchCategory) {
          return product;
        }
      });
    } else {
      this.products = this.allProducts;
    }
  }
}
