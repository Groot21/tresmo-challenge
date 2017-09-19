import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Country } from '../app/country';
 
@Injectable()
export class CountrySearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<Country[]> {
    return this.http
               .get(`api/countries/?name=${term}`)
               .map(response => response.json().data as Country[]);
  }
}