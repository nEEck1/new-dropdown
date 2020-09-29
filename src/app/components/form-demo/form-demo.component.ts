import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {

  options = ['one', 'two', 'three', 'four', 'five', 'six'];

  simpleDropdownFormControl = new FormControl('');
  featuredDropdownFormControl = new FormControl();
  multipleDropdownFormControl = new FormControl();
  intializedValueFormControl = new FormControl('one');
  simpleAutocompleteFormControl = new FormControl();
  featuredAutocompleteFormControl = new FormControl();

  constructor() { }
}
