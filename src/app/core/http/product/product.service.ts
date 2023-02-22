import { Product } from 'src/app/shared/model/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private apiService: ApiService) {}

  get(): Observable<Product[]> {
    return this.apiService.get('Product/')
    //.pipe((data) => data);
  }

  getById(id: number): Observable<Product> {
    return this.apiService.get('Product/' + id)
    //.pipe((data) => data);
  }

  delete(id: string) {
    return this.apiService.delete('Product/' + id);
  }

  save(id: string, product: Product): Observable<Product> {
    if (id) {
      // update product
      return this.apiService.put('Product/' + id, product)
    }
    
    // create product
    return this.apiService.post('Product/', product)
  }
}