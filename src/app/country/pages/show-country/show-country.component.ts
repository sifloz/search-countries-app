import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(({ countryId }) => {
    //     this.countryService.getCountryByAlpha(countryId)
    //       .subscribe(country => console.log(country))
    //   });

    this.activatedRoute.params
      .pipe(
        switchMap(({countryId}) => this.countryService.getCountryByAlpha(countryId))
      )
      .subscribe(res => {
        console.log(res)
      })
  }

}
