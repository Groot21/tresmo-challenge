import { Component, Input } from "@angular/core";

import { Country } from "./country";

const MAX_SIZE = 320;

@Component({
  selector: "country-map",
  template: `
      <div>
        <a href="https://www.google.com/maps/search/{{this.sliceCountryName(this.countryName)}}">
        <img src="{{this.getUrl()}}"/>
        </a>
      </div> 
    `
})
export class GoogleMapsComponent {
  @Input() countryName: string;

  private staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";
  private myKey = "AIzaSyCDUPJ4JyL3yoJpUpQgmRh5aeaXAyUAxZQ";
  private language = "en";

  sliceCountryName(countryName: string): string {
    const matchArray = countryName.toLowerCase().match(/\,[a-z| ]+and/g);
    return matchArray ? countryName.toLowerCase().split(/ and |, /g).map(name => name.concat(' island')).join('|') : countryName;
  }

  getSize(): number {
    return Math.min(MAX_SIZE, Math.round(0.8 * parent.innerWidth));
  }

  getUrl(): String {
    return (
      this.staticMapUrl +
      "?center=" +
      encodeURI(this.countryName) +
      "&" +
      `size=${this.getSize()}x${this.getSize()}` +
      "&markers=" +
      this.sliceCountryName(this.countryName) +
      "&key=" +
      this.myKey +
      "&language=" +
      this.language
    );
  }
}
