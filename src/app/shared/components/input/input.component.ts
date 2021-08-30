import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rv-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() name = '';
  @Input() type = '';
  @Input() placeholder = '';

  constructor() {}
}
