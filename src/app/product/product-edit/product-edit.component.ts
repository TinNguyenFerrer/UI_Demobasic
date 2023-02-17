import { Product } from './../../model/product.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  public product!: Product
  
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
      this.productService.put(id.toString(), product).subscribe(res=>{
        console.log(res)
        this.router.navigate(["/product"]);
      })
    }
  }
}
