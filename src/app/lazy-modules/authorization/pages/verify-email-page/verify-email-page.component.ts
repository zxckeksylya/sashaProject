import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-verify-email-page',
  templateUrl: './verify-email-page.component.html',
  styleUrls: ['./verify-email-page.component.scss'],
})
export class VerifyEmailPageComponent implements OnInit {
  constructor(public authService: AuthService, private route: Router) {}

  ngOnInit() {}

  public goToSignIn(): void {
    this.route.navigate([
      RoutingConstants.AUTHORIZATION,
      RoutingConstants.SIGN_IN,
    ]);
  }
}
