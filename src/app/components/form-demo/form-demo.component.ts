import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropdownConfigurtation } from 'src/app/models/dropdown-configuration';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {

  options = ['one', 'two', 'three', 'four', 'five', 'six'];

  simpleDropdown: DropdownConfigurtation = {
    control: new FormControl(),
    dropdownOptions: this.options
  };

  featuredDropdown: DropdownConfigurtation = {
    control: new FormControl(),
    dropdownOptions: this.options,
    type: 'recent',
    showIndex: true,
    maxRecentLength: 4
  };

  multipleDropdown: DropdownConfigurtation = {
    control: new FormControl(),
    dropdownOptions: this.options,
    type: 'multiple'
  };

  manipulativeDropDown: DropdownConfigurtation = {
    control: new FormControl('one'),
    dropdownOptions: this.options
  };

  simpleAutocomplete: DropdownConfigurtation = {
    control: new FormControl(),
    dropdownOptions: this.options,
    type: 'text'
  };

  featuredAutocomplete: DropdownConfigurtation = {
    control: new FormControl(),
    dropdownOptions: this.options,
    type: 'text',
    showIndex: true
  };

  demoForm = new FormGroup({
    simpleDropdown: this.simpleDropdown.control,
    featuredDropdown: this.featuredDropdown.control,
    multipleDropdown: this.multipleDropdown.control,
    manipulativeDropDown: this.manipulativeDropDown.control,
    simpleAutocomplete: this.simpleAutocomplete.control,
    featuredAutocomplete: this.featuredAutocomplete.control
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
