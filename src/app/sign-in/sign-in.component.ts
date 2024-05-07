import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faMeh } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  faMeh: any = faMeh;

  registerForm!: FormGroup;
  faEnvelope = faEnvelope;
  faKey = faKey;
  buttonClicked: boolean = false; 

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm() {
    this.registerForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  isFormValid: boolean = false;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);

    if (captchaResponse != null) {
      this.isFormValid = true;
    }
  }
  sign_in() {

    if (!this.areFieldsFilled()) {
      $('#signinModal').modal('show');
    }
    else if (!this.email?.valid) {
      $('#invalidEmailModal').modal('show'); 
    } 
    else {
      this._router.navigate(['/home']);
    }
  }
  

  
  
  areFieldsFilled(): boolean {
    return !!this.registerForm.get('email')?.value &&
           !!this.registerForm.get('password')?.value;
  }
  
}
