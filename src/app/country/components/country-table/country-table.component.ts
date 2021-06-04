import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input()
  countries: Country[] = [];
  
  constructor() { }

}
