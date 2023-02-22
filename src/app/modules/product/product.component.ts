import { ProductService } from 'src/app/core/http/product/product.service';
import { ApiService } from 'src/app/core/http/api.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product!: Product[];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.productService.get().subscribe((data) => {
      this.product = data
    }, err => {
      console.log(err)
    });
  }

  delete(id: number) {
    console.log(id)
    this.productService.delete(id.toString()).subscribe((r) => {
      this.productService.get().subscribe((data) => {
        this.product = data
      });
    }, err => {
      window.alert("err");
    })
  }

  redirectToAddProduct() {
    this.router.navigate(["/product/add"]);
  }

  redirectToEditProduct(id: number) {
    this.router.navigate([`product/edit/${id}`]);
  }
}
