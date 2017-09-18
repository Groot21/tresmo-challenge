import { Component, Input } from "@angular/core";

import { Country } from "./country";

@Component({
  selector: "title-flag",
  template: `
    <div class="container">
        <h2>{{country.name | uppercase}}
            <img src="{{country.flagUrl}}"/>
        </h2>
    </div>
    `,
  styles: [`
    .container h2 {
        margin-right: 10px;
    }

    .container img {
        height: 2em;
    }
  `],
})
export class TitleFlagComponent {
  @Input() country: Country;
}
