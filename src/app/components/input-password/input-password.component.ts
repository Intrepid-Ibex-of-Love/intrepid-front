import {Component, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from '../input-email/input-email.component'

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  loginForm = { password: ''}

  minPw = 8;
  maxPw = 10;

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPw),
    Validators.maxLength(this.maxPw),
    // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
  ]);

  matcher = new MyErrorStateMatcher();

}
