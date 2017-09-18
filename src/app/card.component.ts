import { Component, Input } from "@angular/core";

import { Country } from "./country";

@Component({
  selector: "country-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() country: Country;
}
