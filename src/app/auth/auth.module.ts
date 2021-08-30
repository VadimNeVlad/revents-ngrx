import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/auth/auth.effects';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SignUpComponent, AuthComponent, SignInComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
