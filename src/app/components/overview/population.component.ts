import { Component, Input } from "@angular/core";

import { Country } from "../../types";
import { formatNumber } from "../../util/numberFormatter";

@Component({
  selector: "population",
  templateUrl: "./population.component.html",
  styleUrls: ["./population.component.css"],
})
export class PopulationComponent {
  @Input() country: Country;

  getFormatedPopulation(): String {
    return formatNumber(this.country.population);
  }
}
