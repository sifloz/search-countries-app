import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [
  ]
})
export class PerCountryComponent {
  query: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchHandler() {
    this.hasError = false;
    this.countryService.searchCountry(this.query)
      .subscribe((countries) => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.hasError = true;
        this.countries = [];
      });
  }
}
