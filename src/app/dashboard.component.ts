import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';

@Component({
    selector: "my-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

    countries: Country[];

    constructor(private countryService: CountryService) {}

    ngOnInit() : void {
        this._initCountries();
    }

    async _initCountries(): Promise<void> {
        this.countries = await this.countryService.getCountries();
    }

    // TODO
    sortByName(): void {}

    sortByPopulation(): void {}

}