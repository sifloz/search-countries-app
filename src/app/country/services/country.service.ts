import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/Country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2'
  
  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${query}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${query}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    
    const url = `${this._apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
