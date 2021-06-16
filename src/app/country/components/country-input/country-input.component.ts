import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  query: string = '';

  constructor() { }
  
  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      ).subscribe(query => {
        this.onDebounce.emit(query);
      })
  }

  searchHandler () {
    this.onEnter.emit(this.query);
  }

  pressedKeyHandler () {
    this.debouncer.next(this.query)
  }

}
