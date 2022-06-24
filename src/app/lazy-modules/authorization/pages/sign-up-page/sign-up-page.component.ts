import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoutingConstants } from '../../../../core/constants/routing.constants';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    username: new FormControl('', [Validators.required]),
    student: new FormControl(false),
    coach: new FormControl(false),
  });
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {}

  public onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    const { email, password } = this.signUpForm.getRawValue();
    this.authService.SignUp(email, password);
    this.route.navigate([
      RoutingConstants.AUTHORIZATION,
      RoutingConstants.SIGN_IN,
    ]);
  }

  public goToSignIn(): void {
    this.route.navigate([
      RoutingConstants.AUTHORIZATION,
      RoutingConstants.SIGN_IN,
    ]);
  }
}
