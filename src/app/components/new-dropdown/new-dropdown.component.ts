import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-dropdown',
  templateUrl: './new-dropdown.component.html',
  styleUrls: ['./new-dropdown.component.scss']
})
export class NewDropdownComponent implements OnInit {

  private readonly MAX_RECENT_LENGTH = 3;

  @Input() control: FormControl;

  @Input() dropdownOptions: string[];
  @Input() type: 'dropdown' | 'multiple' | 'autocomplete' = 'dropdown';
  @Input() showIndex = false;
  @Input() showMultiple = false;
  @Input() showRecent = false;

  recent = [];

  constructor() { }

  ngOnInit(): void {
    if (this.showRecent) {
      this.control.valueChanges.subscribe(value => this.newRecent(value));
    }
  }

  private newRecent(value: string): void {
    const valueIndex = this.recent.indexOf(value, 0);
    if (valueIndex > -1) {
      this.recent.splice(valueIndex, 1);
    }

    if (this.recent.length === this.MAX_RECENT_LENGTH) {
      this.recent.shift();
    }

    this.recent.push(value);
  }
}
