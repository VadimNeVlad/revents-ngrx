import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputRadio } from '../../models/inputs-options';

@Component({
  selector: 'rv-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent {
  @Input() options: InputRadio[] = [];
  @Input() control!: FormControl;

  constructor() {}
}
