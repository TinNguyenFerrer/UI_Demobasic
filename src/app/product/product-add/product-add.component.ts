import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  public product!: Product

  constructor(private productService: ProductService, private router: Router) {
  }

  createProduct(product: Product) {
    console.log(product);
    this.productService.save("", product).subscribe(() => {
      this.router.navigate(["/product"]);
    }, err => {
      window.alert("err");
    })
  }


}
