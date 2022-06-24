import { Component, OnInit } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-input-control.class';

@Component({
  selector: 'app-text-control-with-icon',
  templateUrl: './text-control-with-icon.component.html',
  styleUrls: ['./text-control-with-icon.component.scss'],
})
export class TextControlWithIconComponent extends BaseInputControl {}
