import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../../../core/constants/routing.constants';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private authService: AuthService, private route: Router) {}

  public ngOnInit(): void {}

  public goToForgotPassword(): void {
    this.route.navigate([
      RoutingConstants.AUTHORIZATION,
      RoutingConstants.FORGOT_PASSWORD,
    ]);
  }

  public goToSignUp(): void {
    this.route.navigate([
      RoutingConstants.AUTHORIZATION,
      RoutingConstants.SIGN_UP,
    ]);
  }

  public onSubmit(): void {
    if (this.signInForm.invalid) {
      return;
    }
    const { email, password } = this.signInForm.getRawValue();
    this.authService.SignIn(email, password);
  }
}
