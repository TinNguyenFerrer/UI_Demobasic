import { Product } from './../../model/product.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  public product!: Product
  frmEditProduct = new FormGroup({
    name: new FormControl("",[Validators.maxLength(500),Validators.minLength(1),Validators.required]),
    description: new FormControl("",[Validators.maxLength(800),Validators.minLength(1),Validators.required]),
    price: new FormControl("",[Validators.max(1000000),Validators.required]),
    quantity:new FormControl("",[Validators.max(1000),Validators.required])
  })
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.getById(parseInt(id)).subscribe(product => {
        this.product = product;
        console.log(this.product);
      });
    }
  }
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  }
  edit(product: Product): void {
    console.log(product);
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.save(id.toString(), product).subscribe(res => {
        console.log(res)
        this.router.navigate(["/product"]);
      }, err => { window.alert("err"); })
    }
  }
}

