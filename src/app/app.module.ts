import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'ngx-accordion';

import { AppComponent } from './app.component';
import { CardComponent } from './components/overview/card.component';
import { DetailsComponent } from './components/details/details.component';
import { CountryService } from './services/country.service';
import { DashboardComponent } from './components/overview/dashboard.component';
import { StaticMapComponent } from './components/details/static-map.component';
import { IncorrectDataFormComponent } from './components/details/incorrect-data-form.component';
import { PopulationComponent } from './components/overview/population.component';
import { SharePageComponent } from './components/details/share-country.component';
import { HeaderComponent } from './components/details/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailsComponent,
    DashboardComponent,
    StaticMapComponent,
    HeaderComponent,
    IncorrectDataFormComponent,
    PopulationComponent,
    SharePageComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    AppRoutingModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

