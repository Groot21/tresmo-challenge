import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { CountrySearchService } from './country-search.service';
import { Country } from './country';
 
@Component({
  selector: 'country-search',
  templateUrl: './country-search.component.html',
  styleUrls: [ './country-search.component.css' ],
  providers: [CountrySearchService]
})
export class CountrySearchComponent implements OnInit {
  countries: Observable<Country[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private countrySearchService: CountrySearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.countries = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => (term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.countrySearchService.search(term)
        // or the observable of empty countries if there was no search term
        : Observable.of<Country[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Country[]>([]);
      }));
  }
 
  gotoDetail(country: Country): void {
    let link = ['/detail', country.id];
    this.router.navigate(link);
  }
}