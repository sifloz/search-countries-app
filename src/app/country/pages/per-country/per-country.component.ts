import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PerCountryComponent {
  query: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  searchHandler(query: string) {
    
    this.showSuggestions = false;
    this.hasError = false;
    this.query = query;

    this.countryService.searchCountry(this.query)
      .subscribe((countries) => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.hasError = true;
        this.countries = [];
      });
  }

  suggestionsHandler(query: string) {
    this.hasError = false;
    this.query = query;
    this.showSuggestions = true;

    this.countryService.searchCountry(query)
      .subscribe(countries => this.suggestedCountries = countries.splice(0, 5),
      err => this.suggestedCountries = []);
  }

  searchSuggestedHandler() {
    if (this.query.length > 0) {
      this.searchHandler(this.query);
    }
  }
}
