import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-recordar-contrasena',
  templateUrl: './recordar-contrasena.component.html',
  styleUrls: ['./recordar-contrasena.component.css']
})
export class RecordarContrasenaComponent  {

  registerForm = {
    email: '',
  };
  constructor(private authService: AuthService, private router: Router,  private toastr: ToastrService) { }

  focus = false

  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    Validators.email,
  ]);


  newForm = new FormGroup({
    email: this.email
  })

  matcher = new MyErrorStateMatcher();

  resetPass() {
    if (this.newForm.valid) {
      this.authService.resetPass(this.registerForm)
        .then(newUser => {
          if (newUser.status===false){
            this.toastr.error(newUser.error)
          } else{
            this.toastr.error(newUser.error);
            this.router.navigate(['/login'])
          }
        })
    }
  }

}
