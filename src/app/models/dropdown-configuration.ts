import { FormControl } from '@angular/forms';

export type DropdownConfigurtation = {
    control: FormControl;
    dropdownOptions: string[];
    type?: 'simple' | 'recent' | 'multiple' | 'text';
    showIndex?: boolean;
    maxRecentLength?: number;
};