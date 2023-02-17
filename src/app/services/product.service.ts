import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor (
    private apiService: ApiService
  ) {}
  get(): Observable<Product[]> {
    return this.apiService.get('Product/')
      //.pipe((data) => data);
  }
  getById(id :number): Observable<Product> {
    return this.apiService.get('Product/'+id)
      //.pipe((data) => data);
  }
  delete(id: string) {
    return this.apiService.delete('Product/' + id);
  }
  
  put(id: string, product: Product): Observable<Product> {
    // If we're updating an existing
    if (id) {
       return this.apiService.put('Product/' + id, product)

    // create new
    } else {
      return this.apiService.post('Product/', {product: product})
    }
  }

}
