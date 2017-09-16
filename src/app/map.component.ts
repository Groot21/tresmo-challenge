import { Component, OnInit } from '@angular/core';

import { CountryService } from './country.service'

@Component({
    selector: "map",
    template: `
        <h3>My Google Maps Demo</h3>
        <div id="map"></div> 
    `,
    styles: [`
    #map {
        width: 100%;
        height: 400px;
      }
    `]
})

export class MapComponent implements OnInit{

    constructor(private countryService: CountryService) {}

    initMap(lat: number, long: number):void {
        
    }

    ngOnInit(): void {

    }

}