import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.read().subscribe((products) => this.products = products)
  }
}
