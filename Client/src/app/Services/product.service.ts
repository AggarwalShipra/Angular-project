import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Product } from '../Schema/productSchema';
import { catchError } from 'rxjs/operators';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };
  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/api/getProduct").pipe(catchError(this.handleError));
  }
  addProduct(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:3000/api/addProduct", newProduct, httpOption)
      .pipe(catchError(this.handleError));
  }
  getItem(id:String):Observable<Product>
  {
    return this.httpClient.get<Product>("http://localhost:3000/api/getItem/"+id).pipe(catchError(this.handleError));
  }
}
