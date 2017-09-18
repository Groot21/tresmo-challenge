import { Component, Input } from "@angular/core";

import { Country } from "./country";

@Component({
  selector: "country-population",
  template: `
      <div class="popul">
        <h4><img src="../assets/icons/population1.svg" alt=""/> {{getFormatedPopulation()}}</h4>
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
    return this.country.population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
