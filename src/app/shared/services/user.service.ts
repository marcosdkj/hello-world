import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../constants/constant'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }



  getAllUser() {
    return this.http.get<User>(Constants.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getUser(id:number):Observable<User> {
    return this.http.get<User>(Constants.baseUrl+'/'+id).pipe(
      catchError(this.handleError)
    );
  }


  postUser(user: User): Observable<User> {
    return this.http.post<User>(Constants.baseUrl, user, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<{}> {
    const deleteUrl = Constants.baseUrl + '/' + id;
    return this.http.delete(deleteUrl, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateUser (user : User): Observable<User>{
    return this.http.put<User>(Constants.baseUrl,user,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


}
