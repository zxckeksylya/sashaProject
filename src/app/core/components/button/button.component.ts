import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type BehaviorType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() classNames = '';
  @Input() disabled = false;
  @Input() behaviorType: BehaviorType = 'button';

  @Output() public buttonClick = new EventEmitter<Event>();

  public onButtonClick(event: Event): void {
    this.buttonClick.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
