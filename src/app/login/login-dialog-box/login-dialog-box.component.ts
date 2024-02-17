import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SupabaseService } from "src/app/services/supabase.service";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormGroupDirective,
} from "@angular/forms";
@Component({
  selector: "app-login-dialog-box",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login-dialog-box.component.html",
  styleUrls: ["./login-dialog-box.component.scss"],
})
export class LoginDialogBoxComponent {
  constructor(private supabase: SupabaseService) {}

  existingUser: boolean = false;
  newUser: boolean = true;
  signup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8), //  atleastOneSpecialCharacter() was here
    ]),
  });
  login = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8), //  atleastOneSpecialCharacter() was here
    ]),
  });
  signupWithEmail(f: FormGroupDirective) {
    console.log(f);
    let values: any[] = [];
    values = f.directives.map((control) => control.value);
    console.log(values);
    // console.log({ email, password });
    // e?.preventDefault();
    // console.log(this.email);
    this.supabase.checkUser(values[0]).then((res) => {
      if (res?.data!.length > 0) {
        this.existingUser = true;
        console.log(this.existingUser, res.data);
      } else {
        console.log(this.supabase.registerUser(values[0], values[1]));
      }
    });
  }
  loginWithEmail(f: FormGroupDirective) {
    let values: any[] = [];
    values = f.directives.map((control) => control.value);
    // this.supabase.signin(values[0], values[1]);
    this.supabase.createPost();
  }
  get emailValue() {
    return this.signup.get("email")?.value as string;
  }
  get password(): AbstractControl | null {
    return this.signup.get("password");
  }
  get email() {
    return this.signup.get("email");
  }
  // get ifexistingUser() {
  //   console.log(this.existingUser);
  //   return this.existingUser;
  // }
  get passwordValue() {
    return this.signup.get("password")?.value as string;
  }
  get loginEmailValue() {
    return this.login.get("email")?.value as string;
  }
  get loginPasswordValue() {
    return this.login.get("password")?.value as string;
  }
}
