import { Component, Input, OnInit } from '@angular/core';
import { DropdownConfigurtation } from 'src/app/models/dropdown-configuration';

@Component({
  selector: 'app-new-dropdown',
  templateUrl: './new-dropdown.component.html',
  styleUrls: ['./new-dropdown.component.scss']
})
export class NewDropdownComponent implements OnInit {

  private readonly MAX_RECENT_LENGTH = 3;

  @Input() config: DropdownConfigurtation;

  recent = [];

  constructor() {
  }

  ngOnInit(): void {
    this.config.type = this.config.type || 'simple';
    this.config.showIndex = this.config.showIndex || false;
    this.config.maxRecentLength = this.config.maxRecentLength || this.MAX_RECENT_LENGTH;

    if (this.config.type === 'recent') {
      this.config.control.valueChanges.subscribe(value => this.newRecent(value));
    }
  }

  private newRecent(value: string): void {
    const valueIndex = this.recent.indexOf(value, 0);
    if (valueIndex > -1) {
      this.recent.splice(valueIndex, 1);
    }

    if (this.recent.length === this.config.maxRecentLength) {
      this.recent.shift();
    }

    this.recent.push(value);
  }
}
