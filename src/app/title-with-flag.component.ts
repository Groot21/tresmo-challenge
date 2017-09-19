import { Component, Input } from "@angular/core";

import { Country } from "./country";

@Component({
  selector: "title-flag",
  templateUrl: "./title-with-flag.component.html",
  styleUrls: ["./title-with-flag.component.css"]
})
export class TitleFlagComponent {
  @Input() country: Country;
}
