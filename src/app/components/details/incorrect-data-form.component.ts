import { Component } from "@angular/core";

@Component({
  selector: "incorrect-data-form",
  templateUrl: "./incorrect-data-form.component.html",
  styleUrls: ["./incorrect-data-form.component.css"]
})
export class IncorrectDataFormComponent {
  notImplementedAlert(): void {
    alert('Neither validation nor sending is yet implemented...');
  }
}
