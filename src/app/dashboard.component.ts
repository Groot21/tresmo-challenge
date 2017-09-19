import { Component, OnInit } from "@angular/core";
import { Country } from "./country";
import { CountryService } from "./country.service";

@Component({
  selector: "my-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  countries: Country[];
  nameAsc: boolean;
  populationAsc: boolean;
  recentlySortedByName: boolean;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.resetNameOrder();
    this.resetPopulationOrder();
    this._initCountries();
    /*this.recentlySortedByName = true;*/
  }

  async _initCountries(): Promise<void> {
    this.countries = await this.countryService.getCountries();
    this.sortByName(this.nameAsc);
    this.reverseNameOrder();
  }

  sortByName(ascending: boolean): void {
    const sortOrder = ascending ? 1 : -1;
    this.countries.sort(
      (country1, country2) =>
        sortOrder * country1.name.localeCompare(country2.name)
    );
    this.resetPopulationOrder();
    this.recentlySortedByName = true;
  }

  sortByPopulation(ascending: boolean): void {
    const sortOrder = ascending ? 1 : -1;
    this.countries.sort(
      (country1, country2) =>
        sortOrder * (country1.population - country2.population)
    );
    this.resetNameOrder();
    this.recentlySortedByName = false;
  }

  reverseNameOrder(): void {
    this.nameAsc = !this.nameAsc;
  }

  reversePopulationOrder(): void {
    this.populationAsc = !this.populationAsc;
  }

  resetNameOrder(): void {
    this.nameAsc = true;
  }
  resetPopulationOrder(): void {
    this.populationAsc = true;
  }

  getCountriesByTerm(term: string): Country[] {
    return term
      ? this.countries.filter(country =>
          country.name.toLowerCase().includes(term.toLocaleLowerCase())
        )
      : this.countries;
  }

  getCountriesByLetter(letter: string): Country[] {
    return this.countries
      ? this.countries.filter(
          country =>
            !letter ||
            country.name.toUpperCase().startsWith(letter.toUpperCase())
        )
      : undefined;
  }

  getAlphabet(): string[] {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  getSortNameIcon(): string {
    if (this.recentlySortedByName === true) {
      return "../assets/icons/".concat(
        (this.nameAsc === true)
        ? "sort_asc.svg"
        : "sort_desc.svg");
    }
  }

  getSortPopulationIcon(): string {
    if (this.recentlySortedByName === false) {
      return "../assets/icons/".concat(
        (this.populationAsc === true)
        ? "sort_asc.svg"
        : "sort_desc.svg");
    }
  }
}
