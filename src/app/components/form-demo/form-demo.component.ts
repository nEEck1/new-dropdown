import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {

  options = ['one', 'two', 'three', 'four', 'five', 'six'];

  // simpleDropdown = new FormControl('');
  // featuredDropdown = new FormControl('');
  // simpleAutocomplete = new FormControl('');
  // newValueAutocomplete = new FormControl('');

  constructor() { }
}
