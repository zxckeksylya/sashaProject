import { Directive, Input } from '@angular/core';
import { BaseControl } from './base-control.class';

type behaviorType = 'text' | 'email' | 'number' | 'password';

@Directive()
export class BaseInputControl extends BaseControl {
  @Input() public label = '';
  @Input() public placeholder = '';
  @Input() public type: behaviorType = 'text';
}
