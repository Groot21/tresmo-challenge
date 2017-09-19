import { Http } from "@angular/http";

import { Country } from "../app/country";
import { formatString } from "../app/stringFormatter";

export class MapService {

  constructor(private http: Http) {}

  getMapForCountry(country: Country): Promise<void> {
    return;
  }



  private handleError(error: any): Promise<any> {
    console.error("An error occured", error); // TODO error handling
    return Promise.reject(error.message || error);
  }
}

// TODO Delete
