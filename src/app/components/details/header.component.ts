import { Component, Input } from "@angular/core";

import { Country } from "../../types";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Input() country: Country;
}
