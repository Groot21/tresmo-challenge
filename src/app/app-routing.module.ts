import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/overview/dashboard.component";
import { DetailsComponent } from "./components/details/details.component";

const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "overview", component: DashboardComponent },
  { path: "detail/:id", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
