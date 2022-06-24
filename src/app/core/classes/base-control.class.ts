import {
  Directive,
  Input,
  OnDestroy,
  Optional,
  OnInit,
  DoCheck,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive()
export class BaseControl
  implements ControlValueAccessor, OnDestroy, OnInit, DoCheck
{
  @Input() public classNames = '';
  @Input() public elementId = '';

  public formControl = new FormControl();
  public required: boolean | undefined;

  private destroy$ = new Subject<void>();

  constructor(@Optional() protected ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.onInputValueChange();
    this.required = this.ngControl.control?.hasValidator(Validators.required);
  }

  public ngDoCheck(): void {
    this.initErrors();
    this.syncControlState();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }
  public onTouched: () => void = () => {};

  protected initErrors(): void {
    const ngControlErrors = this.ngControl.control?.errors;
    if (ngControlErrors && ngControlErrors !== this.formControl.errors) {
      this.formControl.setErrors(ngControlErrors);
    }
  }

  protected onInputValueChange(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((v) => {
        this.onChange(v);
      });
  }

  protected syncControlState(): void {
    if (this.ngControl.dirty !== this.formControl.dirty) {
      this.formControl.markAsDirty();
    }
    if (this.ngControl.pristine !== this.formControl.pristine) {
      this.formControl.markAsPristine();
    }
    if (this.ngControl.pending !== this.formControl.pending) {
      this.formControl.markAsPending();
    }
    if (this.ngControl.touched !== this.formControl.touched) {
      this.formControl.markAsTouched();
    }
    if (this.ngControl.untouched !== this.formControl.untouched) {
      this.formControl.markAsUntouched();
    }
  }
  protected onChange: (value: any) => void = () => {};
}
