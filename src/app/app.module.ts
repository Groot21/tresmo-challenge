import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { CountryDetailComponent } from './country-detail.component';
import { CountriesComponent } from './countries.component';
import { CountrySearchComponent} from './country-search.component';
import { CountryService } from './country.service';
import { DashboardComponent } from './dashboard.component';
import { IncorrectDataFormComponent } from './incorrect-data-form.component';
import { PopulationComponent } from './population.component';
import { SharePageComponent } from './share-page.component';
import { TitleFlagComponent } from './title-with-flag.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CountryDetailComponent,
    CountriesComponent,
    CountrySearchComponent,
    DashboardComponent,
    IncorrectDataFormComponent,
    PopulationComponent,
    SharePageComponent,
    TitleFlagComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

