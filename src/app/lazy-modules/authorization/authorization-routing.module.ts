import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { RoutingConstants } from '../../core/constants/routing.constants';
import { VerifyEmailPageComponent } from './pages/verify-email-page/verify-email-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationPageComponent,
    children: [
      {
        path: RoutingConstants.SIGN_IN,
        component: SignInPageComponent,
      },
      {
        path: RoutingConstants.SIGN_UP,
        component: SignUpPageComponent,
      },
      {
        path: RoutingConstants.VERIFY_EMAIL,
        component: VerifyEmailPageComponent,
      },
      {
        path: RoutingConstants.FORGOT_PASSWORD,
        component: ForgotPasswordPageComponent,
      },
      {
        path: '**',
        redirectTo: RoutingConstants.SIGN_IN,
      },
    ],
  },
  {
    path: '**',
    redirectTo: RoutingConstants.SIGN_IN,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule {}
