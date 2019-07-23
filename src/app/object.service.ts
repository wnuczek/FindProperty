import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {objectSearched} from './objectSearched';
import {objectOffered} from './objectOffered';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class objectService {

  private objectsApiURL = 'https://dev.pawelwnuk.pl';  // URL to web api


  constructor(private http: HttpClient) { }


/** GET objectsSearched from the server */
getObjectsSearched (): Observable<objectSearched[]> {
	return this.http.get<objectSearched[]>(`${this.objectsApiURL}/objects/searched`)
	.pipe( 
    tap(_ => console.log('fetched searched objects'))
  );
}

/** GET objectsSearched from the server */
getObjectSearchedDetails (id: number): Observable<objectSearched> {
	return this.http.get<objectSearched>(`${this.objectsApiURL}/object/searched/${id}`)
	.pipe( 
    tap(_ => console.log('fetched searched object details'))
  );
}

addObjectSearched (objectSearched: objectSearched): Observable<objectSearched> {
  return this.http.post<objectSearched>(`${this.objectsApiURL}/object/searched`, objectSearched).pipe(tap(_ => console.log('added new searched object')));
}



/** GET objectsSearched from the server */
getObjectsOffered (): Observable<objectOffered[]> {
	return this.http.get<objectOffered[]>(`${this.objectsApiURL}/objects/offered`)
	.pipe( 
    tap(_ => console.log('fetched offered objects'))
  );
}

}