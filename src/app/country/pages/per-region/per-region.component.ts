import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [
  ]
})
export class PerRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getCSSClass(region: string): string {
    return `p-4 border border-gray-300 rounded block w-full ${region === this.activeRegion ? 'bg-gray-100' : null}`;
  }

  activateRegionHandler(region: string) {

    if(region === this.activeRegion) { return; }

    this.activeRegion = region;
    this.countries = [];

    this.countryService.getCountriesByRegion(region)
      .subscribe((countries) => {
        this.countries = countries;
      })
  }

}
