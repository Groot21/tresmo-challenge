import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Country } from './country';

@Injectable()
export class CountryService {

    private serverUrl = "https://restcountries.eu/rest/v2/";
    private basicFields = "alpha2Code;flag;name;population";
    private detailedFields= "capital;region;timezones;currencies;latlng";

    constructor(private http: Http) {}

    getCountries(): Promise<Country[]> {
        const url = this.serverUrl + "all?fields=" + this.basicFields;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().map(value => ({...value, id: value.alpha2Code, flagUrl: value.flag})))
            .catch(this.handleError);
    }

    getCountry(id: string): Promise<Country> {
        const url = this.serverUrl + "alpha/" + id + "?fields=" + this.basicFields.concat(";" + this.detailedFields);
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .then(data => ({...data, id: data.alpha2Code, flagUrl: data.flag, continent: data.region, latitude: data.latlng[0], longitude: data.latlng[1], timeZones: data.timezones }))
        .catch(this.handleError);
    }

    getDetailedCountry(country: Country): Promise<Country> {
        const url = this.serverUrl + "alpha/" + country.id + "?fields=" + this.detailedFields;
        return this.http.get(url).toPromise()
            .then(response => response.json())
            .then(data => ({...data, id: data.alpha2Code, flagUrl: data.flag, continent: data.region, latitude: data.latlng[0], longitude: data.latlng[1], timeZones: data.timezones }))
            .catch(this.handleError);
    }

    private handleError(error:any): Promise<any> {
        console.error('An error occured', error); // TODO error handling
        return Promise.reject(error.message || error);
    }

}