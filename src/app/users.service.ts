import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { user } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private objectsApiURL = 'https://dev.pawelwnuk.pl';  // URL to web api


  constructor(private http: HttpClient) { }

  getUsers (): Observable<user[]> {
  	return this.http.get<user[]>(`${this.objectsApiURL}/users`)
  	.pipe( 
      tap(_ => console.log('fetched users'))
    );
  }

  getUserDetails (id: number): Observable<user> {
  	return this.http.get<user>(`${this.objectsApiURL}/user/${id}`)
  	.pipe( 
      tap(_ => console.log('fetched user details'))
    );
  }

  async checkUserExists(email: string){
     const response = await this.http.get(`${this.objectsApiURL}/checkUserExists/${email}`).toPromise();
     return JSON.stringify(response);
  }

}