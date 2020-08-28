import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable as __Observable, throwError, from } from 'rxjs';
import { map as __map, filter as __filter, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "http://localhost:9000/"
  constructor(private httpClient: HttpClient) { }

  // get API
  public getData(req: any): __Observable<[]> {
    let api = this.url+req
    return this.httpClient.get<[]>(api, {responseType: 'json'})
    .pipe(
      // retry(1),
      catchError(this.handleError)
    )
  }

  // post API
  public post(req: any,data): __Observable<[]> {
    let api = this.url+req
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded'}
    return this.httpClient.post<[]>(api, data, {headers})
    .pipe(
      catchError(this.handleError)
    );
  }

   // Error handling
  handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
  }
}
