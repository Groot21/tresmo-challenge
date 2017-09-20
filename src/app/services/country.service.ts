import { Headers, Http } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/toPromise";

import { Country } from "../types";

@Injectable()
export class CountryService {
  private serverUrl = "https://restcountries.eu/rest/v2/";
  private basicFields = "alpha2Code;flag;name;population";
  private detailedFields = "capital;region;timezones;currencies";

  private myCountries: Map<string, Country>;

  constructor(private http: Http) {
    this.myCountries = new Map();
  }

  async _loadCountries(): Promise<void> {
    const url = this.serverUrl + "all?fields=" + this.basicFields;

    try {
      const response = await this.http.get(url).toPromise();
      const data = response.json();

      const countries: Country[] = data.map(value => ({
        ...value,
        id: value.alpha2Code,
        flagUrl: value.flag
      }));

      countries.forEach(country => this.myCountries.set(country.id, country));
    } catch (err) {
      this.handleError(err);
    }
  }

  async getCountries(): Promise<Country[]> {
    if(this.myCountries.size === 0) {
        await this._loadCountries();
    }
    return Array.from(this.myCountries.values());
  }

  async getCountry(id: string): Promise<Country> {
    if(!this.myCountries.has(id) || !this.myCountries.get(id).capital) {
        await this._resolveDetails(id);
    }
    return this.myCountries.get(id);
  }

  async _resolveDetails(id: string): Promise<void> {
    const url =
      this.serverUrl + "alpha/" + id + "?fields=" + this.detailedFields;

    try {
      const country = (await this.getCountries()).find(
        myCountry => myCountry.id === id
      );

      const response = await this.http.get(url).toPromise();
      const data = response.json();

      const detailedCountry: Country = {
        ...country,
        ...data,
        continent: data.region,
        timeZones: data.timezones
      };

      this.myCountries.set(country.id, detailedCountry);
    } catch (err) {
        this.handleError(err);
    }
  }

  private handleError(error: any): void {
    console.error("An error occured", error);
  }
}
