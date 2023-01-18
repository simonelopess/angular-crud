import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }


  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage('Produto Excluído com Sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
