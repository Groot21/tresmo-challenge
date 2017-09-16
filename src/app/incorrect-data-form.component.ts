import { Component } from "@angular/core";

@Component({
  selector: "incorrect-data-form",
  template: `
        <h3>Found some mistakes?</h3>
        <h4>Send a message to the author!</h4>
        
        <div>
            <label>Name*</label>
            <input placeholder="Name"/>
        </div>
        <div>
            <label>Email address*</label>
            <input placeholder="Email address" type="email"/>
        </div><div>
            <label>Text*</label>
            <input  placeholder="Text"/>
        </div>
        
        <button (click)="checkForm()">Send
        </button>
    `
})
export class IncorrectDataFormComponent {
  checkForm(name: String, email:string, text: string): void {
      if (!(name && text && email)) { return;}
  }
}
