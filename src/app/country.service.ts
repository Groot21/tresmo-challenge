import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Country } from './country';

@Injectable()
export class CountryService {

    private serverUrl = "https://restcountries.eu/rest/v2/";
    private basicFields = "alpha2Code;flag;name;population";
    private detailedFields=this.basicFields.concat(";capital;region;timezones;currencies;latlng");

    constructor(private http: Http) {}

    getCountries(): Promise<Country[]> {
        const url = this.serverUrl + "all?fields=" + this.basicFields;
            return this.http.get(url)
                .toPromise()
                .then(response => response.json().map(value => ({...value, id: value.alpha2Code, flagUrl: value.flag})))
                .catch(this.handleError);
    }

    /*getCountriesSlowly(): Promise<Country[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getCountries()), 500);
        })
    }*/

    getCountry(id: string): Promise<Country> {
        const url = this.serverUrl + "alpha/" + id + "?fields=" + this.detailedFields;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .then(data => ({...data, id: data.alpha2Code, flagUrl: data.flag, continent: data.region, latitute: data.latlng[0], longitude: data.latlng[1], timeZones: data.timezones }))
        .catch(this.handleError);
    }

    /*getLatLong(id: string): Promise<Number[]> {
        return [4.0 -72.0];
    }*/

    private handleError(error:any): Promise<any> {
        console.error('An error occured', error); // TODO error handling
        return Promise.reject(error.message || error);
    }

}