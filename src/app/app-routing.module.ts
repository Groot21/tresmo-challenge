import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
/*import { CountriesComponent } from "./countries.component";*/
import { CountryDetailComponent } from "./country-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "overview", component: DashboardComponent },
  { path: "detail/:id", component: CountryDetailComponent }
  /*{ path: "countries", component: CountriesComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
