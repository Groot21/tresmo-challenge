import { Component } from "@angular/core";

@Component({
  selector: "share-country",
  templateUrl: "./share-country.component.html",
  styleUrls: ["./share-country.component.css"]
})
export class SharePageComponent {
  doNothing(network: string): void {
    alert(`Sharing on ${network} is not yet implemented`);
  }
}
