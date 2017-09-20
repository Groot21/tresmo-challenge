import { Component } from "@angular/core";

@Component({
  selector: "share-country",
  templateUrl: "./share-country.component.html",
  styleUrls: ["./share-country.component.css"]
})
export class SharePageComponent {
  doNothing(network: string): void {
    alert(`Sharing on ${network} will soon be possible (if you hire me ;) )`);
  }
}
