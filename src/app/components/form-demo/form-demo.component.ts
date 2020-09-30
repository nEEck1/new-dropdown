import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {

  options = ['one', 'two', 'three', 'four', 'five', 'six'];

  simpleDropdownFormControl = new FormControl('');

  demoForm = new FormGroup({
    simpleDropdown: this.simpleDropdownFormControl,
    featuredDropdown: new FormControl(),
    multipleDropdown: new FormControl(),
    manipulativeDropDown: new FormControl('one'),
    simpleAutocomplete: new FormControl(),
    featuredAutocomplete: new FormControl(),
  });

  formSubmitValue = '';

  constructor() { }

  changeToThreeDemo(): void {
    this.demoForm.controls['manipulativeDropDown'].setValue('three');
  }

  onSubmit() {
    this.formSubmitValue = this.demoForm.value;
  }
}
