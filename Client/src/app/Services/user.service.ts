import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {User} from '../Schema/userSchema';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOption={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient:HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  //rxjs for asynchronous pipe
  //retrieving ContactService
  getUser():Observable<User[]>
  {
    return this.httpClient.get<User[]>('http://localhost:3000/api/show')
    .pipe(
      catchError(this.handleError)
    );
  }

  haveUser(email):Observable<User[]>
  {
    return this.httpClient.get<User[]>('http://localhost:3000/api/check/'+email)
    .pipe(
      catchError(this.handleError)
    );
  }

  authenticate(email,password):Observable<User>
  {
    return this.httpClient.get<User>('http://localhost:3000/api/auth/'+email+'/'+password)
    .pipe(
      catchError(this.handleError)
    );
  }
  addUser(newUser:User):Observable<User>
  {
    var httpHeader=new HttpHeaders();
    httpHeader.append('Content-Type','application/json');
    return this.httpClient.post<User>("http://localhost:3000/api/addUser",newUser,httpOption)
    .pipe(catchError(this.handleError)); 
  }
}