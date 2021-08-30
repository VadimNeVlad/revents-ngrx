import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rv-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() content = '';

  constructor() {}
}
