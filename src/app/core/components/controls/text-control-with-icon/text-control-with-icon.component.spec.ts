import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextControlWithIconComponent } from './text-control-with-icon.component';

describe('TextControlWithIconComponent', () => {
  let component: TextControlWithIconComponent;
  let fixture: ComponentFixture<TextControlWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextControlWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextControlWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
