import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { post } from './posts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private objectsApiURL = 'https://dev.pawelwnuk.pl';  // URL to web api


  constructor(private http: HttpClient) { }


/** GET objectsSearched from the server */
getPosts (): Observable<post[]> {
	return this.http.get<post[]>(`${this.objectsApiURL}/posts`)
	.pipe( 
    tap(_ => console.log('fetched posts'))
  );
}

/** GET objectsSearched from the server */
getPostDetails (id: number): Observable<post> {
	return this.http.get<post>(`${this.objectsApiURL}/post/${id}`)
	.pipe( 
    tap(_ => console.log('fetched post details'))
  );
}

}