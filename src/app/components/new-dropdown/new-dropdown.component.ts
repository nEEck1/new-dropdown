import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-dropdown',
  templateUrl: './new-dropdown.component.html',
  styleUrls: ['./new-dropdown.component.scss']
})
export class NewDropdownComponent {

  @Input() options: string[];
  @Input() type: 'dropdown' | 'multiple' | 'autocomplete' = 'dropdown';
  @Input() showIndex = false;
  @Input() showMultiple = false;

  @Input() control: FormControl;

  constructor() { }
}
