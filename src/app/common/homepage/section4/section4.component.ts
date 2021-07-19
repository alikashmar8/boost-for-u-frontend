import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
