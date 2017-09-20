import { Component, Input } from "@angular/core";

import { Country } from "../../types";

const MAX_SIZE = 320;

@Component({
  selector: "static-map",
  templateUrl: "./static-map.component.html"
})
export class StaticMapComponent {
  @Input() country: Country;

  private staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";
  private myKey = "AIzaSyCDUPJ4JyL3yoJpUpQgmRh5aeaXAyUAxZQ";
  private language = "en";

  sliceCountryName(countryName: string): string {
    const matchArray = countryName.toLowerCase().match(/\,[a-z| ]+and/g);
    return matchArray
      ? countryName
          .toLowerCase()
          .split(/ and |, /g)
          .map(name => name.concat(" island"))
          .join("|")
      : countryName;
  }

  getSize(): number {
    return Math.min(MAX_SIZE, Math.round(0.8 * parent.innerWidth));
  }

  getUrl(): String {
    return (
      this.staticMapUrl +
      "?center=" +
      encodeURI(this.country.name) +
      "&" +
      `size=${this.getSize()}x${this.getSize()}` +
      "&markers=" +
      this.sliceCountryName(this.country.name) +
      "&key=" +
      this.myKey +
      "&language=" +
      this.language
    );
  }
}
