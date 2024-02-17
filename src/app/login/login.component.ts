import { CommonModule } from '@angular/common';
import { SupabaseService } from './../services/supabase.service';
import { Component, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  FormGroupDirective,
} from '@angular/forms';
import { LoginDialogBoxComponent } from './login-dialog-box/login-dialog-box.component';
// import { atleastOneSpecialCharacter } from './password.validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginDialogBoxComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private supabase: SupabaseService) {}
  existingUser: boolean = false;
  newUser: boolean = true;
  signup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8), //  atleastOneSpecialCharacter() was here
    ]),
  });
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8), //  atleastOneSpecialCharacter() was here
    ]),
  });
  signupWithEmail(f: FormGroupDirective) {
    console.log(f);
    // console.log({ email, password });
    // e?.preventDefault();
    // console.log(this.email);
    // this.supabase.checkUser(email).then((res) => {
    //   if (res?.data!.length > 0) {
    //     this.existingUser = true;
    //     // console.log(this.existingUser, res.data);
    //   } else {
    //     // console.log(this.supabase.registerUser(email, password));
    //   }
    // });
  }
  loginWithEmail(f: FormGroupDirective) {
    let values: any[] = [];
    values = f.directives.map((control) => control.value);
    console.log(values);
    this.supabase.signin(values[0], values[1]);
  }
  get emailValue() {
    return this.signup.get('email')?.value as string;
  }
  get password(): AbstractControl | null {
    return this.signup.get('password');
  }
  get email() {
    return this.signup.get('email');
  }
  // get ifexistingUser() {
  //   console.log(this.existingUser);
  //   return this.existingUser;
  // }
  get passwordValue() {
    return this.signup.get('password')?.value as string;
  }
  get loginEmailValue() {
    return this.login.get('email')?.value as string;
  }
  get loginPasswordValue() {
    return this.login.get('password')?.value as string;
  }
}
