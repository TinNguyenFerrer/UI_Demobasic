import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  public product!: Product
  frmAddProduct = new FormGroup({
    name: new FormControl("",[Validators.maxLength(500),Validators.minLength(1),Validators.required]),
    description: new FormControl("",[Validators.maxLength(800),Validators.minLength(2),Validators.required]),
    price: new FormControl("",[Validators.max(100000),Validators.required, Validators.min(0)]),
    quantity:new FormControl("",[Validators.max(100000),Validators.required, Validators.min(0)]),
  })
  constructor(private productService: ProductService, private router: Router) {
  }

  createProduct(product: any) {
    console.log(product);
    this.productService.save("", product).subscribe(() => {
      this.router.navigate(["/product"]);
    }, err => {
      console.log(err)
      window.alert("err");
    })
  }


}
