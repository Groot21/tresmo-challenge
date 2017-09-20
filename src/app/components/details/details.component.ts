import { Component, Input , OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Country } from '../../types';
import { CountryService } from '../../services/country.service';
import { formatNumber } from '../../util/numberFormatter';

@Component({
    selector: 'country-details',
    templateUrl: './details.component.html',
    styleUrls: [ './details.component.css'],
})
export class DetailsComponent implements OnInit{
    @Input() country: Country;
    private title;

    constructor(
        private countryService: CountryService,
        private route: ActivatedRoute,
    ) {
        this.title = "Country Details";
    }

    ngOnInit(): void {
        /* extract id from route and get corresponding country*/
        this.route.paramMap
            .switchMap((params: ParamMap) => this.countryService.getCountry(params.get('id')))
            .subscribe(country => this.country = country);
    }

    getFormatedPopulation(): String {
        return formatNumber(this.country.population);
    }
}