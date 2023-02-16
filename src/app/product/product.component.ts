import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product!:Product[];

  constructor(private api: ApiService){
    //api.get("Product")
  }
  ngOnInit() {
    this.api.get("Product").subscribe((res:any)=>{

      console.log(res)
      this.product = res
    })
  }
}
