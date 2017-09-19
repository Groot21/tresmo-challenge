import { Component } from "@angular/core";

@Component({
  selector: "share-page",
  template: `
        <div> Share on 
            <img class="icon" src="../assets/icons/facebook.svg" alt="facebook" (click)="doNothing('Facebook')"/>
            <img class="icon" src="../assets/icons/twitter.svg" alt="twitter" (click)="doNothing('Twitter')"/>
            <img class="icon" src="../assets/icons/google-plus.svg" alt="google+" (click)="doNothing('Google+')"/>
        </div>`,
        styles: [`
        div {
            color: var(--textColor);
            font-size: 16px;
        }
        .icon {
            height: 1.2em;
          }
        `],

})
export class SharePageComponent {

    doNothing(network: string): void {
        alert(`Sharing on ${network} will soon be possible (if you hire me ;-)!`);
    }

}