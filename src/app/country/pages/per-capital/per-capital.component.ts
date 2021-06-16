import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [
  ]
})
export class PerCapitalComponent {
  query: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchHandler(query: string) {
    
    this.hasError = false;
    this.query = query;

    this.countryService.searchCapital(this.query)
      .subscribe((countries) => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.hasError = true;
        this.countries = [];
      });
  }
}
