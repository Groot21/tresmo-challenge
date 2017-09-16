import { Component } from "@angular/core";

@Component({
  selector: "share-page",
  template: `
        <div> Share on 
            <img class="icon" src="../assets/icons/facebook.svg" alt="facebook" (click)="doNothing()"/>
            <img class="icon" src="../assets/icons/twitter.svg" alt="twitter"/>
            <img class="icon" src="../assets/icons/google-plus.svg" alt="google+"/>
        </div>`,
        styles: [`
        .icon {
            height: 1.2em;
          }
        `],

})
export class SharePageComponent {

    doNothing(): void {
        console.log("facebook");
    }

}