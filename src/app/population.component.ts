import { Component, Input } from "@angular/core";

import { Country } from "./country";
import { formatNumber } from "./numberFormatter";

@Component({
  selector: "country-population",
  template: `
      <div class="popul">
        <h4><img src="../assets/icons/population1.svg" alt="#"/> {{getFormatedPopulation()}}</h4>
      </div>
    `,
  styles: [
    `
    img {
        height: 0.9em;
        float: left;
        padding-right: 8px;
    }`
  ]
})
export class PopulationComponent {
  @Input() country: Country;

  getFormatedPopulation(): String {
    return formatNumber(this.country.population);
  }
}
