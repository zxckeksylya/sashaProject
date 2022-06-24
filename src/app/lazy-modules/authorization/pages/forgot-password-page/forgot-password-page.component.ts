import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {}

  public goToSignIn(): void {
    this.route.navigate([
      RoutingConstants.AUTHORIZATION,
      RoutingConstants.SIGN_IN,
    ]);
  }

  public onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    const { email } = this.forgotPasswordForm.getRawValue();
    this.authService.ForgotPassword(email);
  }
}
