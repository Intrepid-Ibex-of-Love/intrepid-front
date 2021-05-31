import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.css']
})
export class InputEmailComponent{
  loginForm = {email: '', password: ''}
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor (){
    console.log(this.loginForm.email)
  }

  ngOninit(){
    console.log(this.loginForm.email)
  }
  // processData() {
  //   console.log(this.loginForm.email)
  //   this.newItemEvent.emit(this.loginForm.email);
  // }

  matcher = new MyErrorStateMatcher();

}
