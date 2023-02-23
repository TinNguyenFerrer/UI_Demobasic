import { Product } from 'src/app/shared/model/product.model';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productApiUrl: string = "Product/"

  constructor(private apiService: ApiService) { }

  private handleError(error: HttpErrorResponse) {
    window.alert(" Error!")
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  get(): Observable<Product[]> {
    return this.apiService.get(this.productApiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<Product> {
    return this.apiService.get(this.productApiUrl + id)
      .pipe(
        catchError(this.handleError)
      );
    //.pipe((data) => data);
  }

  delete(id: string) {
    return this.apiService.delete(this.productApiUrl + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  save(id: string, product: Product): Observable<Product> {
    if (id) {
      // update product
      return this.apiService.put(this.productApiUrl + id, product)
        .pipe(
          catchError(this.handleError)
        );
    }

    // create product
    return this.apiService.post(this.productApiUrl, product)
      .pipe(
        catchError(this.handleError)
      );
  }
}