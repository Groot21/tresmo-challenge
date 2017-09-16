import { Component, Input } from '@angular/core';

import { Country } from "./country";

@Component({
    selector: "country-population",
    template: `
      <div class="popul">
        <h5><img src="../assets/icons/population1.svg" alt=""/> {{country.population}}</h5>
      </div>
    `, 
    styles: [`
    .popul {
        text-align: center;
        float: left;
    }
    .popul img {
        height: 0.9em;
        float: left;
        padding-right: 5px;
    }
    .test {
        display: inline;
    }
    `],
})


export class PopulationComponent {
    @Input() country: Country;
}