import { Component, Input , OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Country } from './country';
import { CountryService } from './country.service';


@Component({
    selector: 'country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls: [ './country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit{
    @Input() country: Country;

    constructor(
        private countryService: CountryService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.countryService.getCountry(params.get('id')))
            .subscribe(country => this.country = country);
    }

    goBack() : void {
        this.location.back();
    }

    getFormatedPopulation(): String {
        return this.country.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
}