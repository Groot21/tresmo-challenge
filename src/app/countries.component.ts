import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from './country';
import { CountryDetailComponent } from './country-detail.component';
import { CountryService } from './country.service';

@Component({
  selector: 'my-countries',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'] ,
  providers: []
})
export class CountriesComponent implements OnInit{ 
  selectedCountry: Country;
  countries: Country[];

  constructor(
    private countryService: CountryService,
    private router: Router
  ){}

  onSelect(country: Country) : void {
    this.selectedCountry = country;
    this.goToDetails();
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  goToDetails(): void {
    this.router.navigate(['/detail', this.selectedCountry.id]);
  }

  // method is called on initialization
  ngOnInit(): void { 
    this.getCountries();
  }
}