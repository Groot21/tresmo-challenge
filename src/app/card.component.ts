import { Component, Input } from "@angular/core";

import { Country } from "./country";

@Component({
  selector: "country-card",
  template: `
    <div class="module country">
        <div class="info-text">
            <h4 class="card-title" >{{country.name}} </h4>
            <country-population [country]="country" ></country-population>
        </div>
        <img class="flag" src="{{country.flagUrl}}" />
    </div>
    `,
  styles: [`
  .module {
    display: flex;
    align-items: center;
    background-color: var(--lightGrey);
    padding: 10px;
    margin: 5px;
    color: var(--textColor);
    height: 100px;
    width: 200px;
    border-radius: 3px; /* rounded edges */
  }
  .module:hover {
    background-color: #EEE;
    cursor: pointer;
    color: #607d8b;
  }
  .info-text {
    float: left;
    padding-left: 5px;
    width: 105px;
  }
  .flag {
    float: right;
    max-height: 80px;
    max-width: 80px;
    padding: 5px 5px 5px 10px;
  }
  .card-title {
    font-size: 100%;
    color: var(--primaryColor);
  }
  `],
})
export class CardComponent {
  @Input() country: Country;
}
