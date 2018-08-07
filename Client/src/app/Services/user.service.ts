import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../Schema/userSchema';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomResponse } from '../Schema/customResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class UserService {
  authToken: any;
  user: any;

  constructor(private httpClient: HttpClient) { }
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
  // getUser():Observable<User[]>
  // {
  //   return this.httpClient.get<User[]>('http://localhost:3000/api/show')
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }
  haveUser(email): Observable<User> {
    return this.httpClient.get<User>('http://localhost:3000/api/check/' + email)
      .pipe(
        catchError(this.handleError)
      );
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  authenticate(user): Observable<CustomResponse> {
    return this.httpClient.post<CustomResponse>('http://localhost:3000/api/authentication', user, httpOption)
      .pipe(
        catchError(this.handleError)
      );
  }
  addInterseted(id,product):Observable<User>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<User>('http://localhost:3000/api/addCart/'+id+'/'+product,this.user,httpOptions).
    pipe(catchError(this.handleError));
  }
  getProfile(): Observable<User> {
    this.loadToken();
    httpOption.headers = httpOption.headers.set('Authorization', this.authToken);
    return this.httpClient.get<User>("http://localhost:3000/api/profile", httpOption);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  addUser(newUser: User): Observable<User> {
    var httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    return this.httpClient.post<User>("http://localhost:3000/api/addUser", newUser, httpOption)
      .pipe(catchError(this.handleError));
  }
  //to check whether user is currently logged in
  loggedIn() {
    const token = localStorage.getItem('id_token');
    return token != null && !helper.isTokenExpired(token);
  }
  isAdmin()
  {
    const user=localStorage.getItem('user');
    this.user=JSON.parse(user);
    if(this.user.model=="admin")
    {
      return true;
    }
    else
    return false;
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}