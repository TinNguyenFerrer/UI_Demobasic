import { ProductService } from './../services/product.service';
import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Product } from '../model/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product!:Product[];

  constructor(private productService: ProductService, private router: Router){
  }

  ngOnInit() {
    this.productService.get().subscribe((data)=>{
      this.product = data
    });
  }

  delete(id : number) {
    console.log(id)
    this.productService.delete(id.toString()).subscribe()

    this.productService.get().subscribe((data)=>{
      this.product = data
    });
  }

  redirectToAdd(){
    this.router.navigate(["/product/add"]);
  }
}
