import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyEmailPageComponent } from './pages/verify-email-page/verify-email-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { TextControlWithIconModule } from '../../core/components/controls/text-control-with-icon/text-control-with-icon.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { CheckboxControlModule } from '../../core/components/controls/checkbox-control/checkbox-control.module';

@NgModule({
  declarations: [
    AuthorizationPageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    VerifyEmailPageComponent,
    ForgotPasswordPageComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    TextControlWithIconModule,
    ButtonModule,
    CheckboxControlModule,
  ],
})
export class AuthorizationModule {}
