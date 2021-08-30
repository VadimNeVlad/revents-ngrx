import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { NameTrimPipe } from './pipes/name-trim.pipe';
import { AvatarColorDirective } from './directives/avatar-color.directive';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputRadioComponent } from './components/input-radio/input-radio.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NameTrimPipe,
    AvatarColorDirective,
    ModalComponent,
    HeaderComponent,
    InputComponent,
    InputRadioComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    NameTrimPipe,
    AvatarColorDirective,
    HeaderComponent,
    ModalComponent,
    InputComponent,
    InputRadioComponent,
  ],
})
export class SharedModule {}
