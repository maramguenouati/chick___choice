import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatternValidatorsService } from 'src/app/patternValidators/patern-validators.service';
import { ConfirmPasswodService } from 'src/app/ConfirmPassword/confirm-password.service';
import{faMeh } from '@fortawesome/free-solid-svg-icons';

declare var $: any; 
@Component({
  selector: 'app-register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  faMeh:any=faMeh;
  
  registerForm!: FormGroup;
  isSignedIn = false;
  siteKey = "6Lc6tWclAAAAAFeRdj952i55fLgWgaoDuqST8EBA";

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  // register form
  buildRegisterForm() {
    this.registerForm = this._fb.group({
      name : ['', [Validators.required, ]],
      lastname : ['', [Validators.required, ]],
      email: ['', [Validators.required, Validators.email]],
      password:['' ,
      [
        Validators.compose(
          [
            Validators.required,
            PatternValidatorsService.patternValidators(/\d/,{hasNumber:true}),
            PatternValidatorsService.patternValidators(/[A-Z]/,{hasCapitalCase:true}),
            PatternValidatorsService.patternValidators(/[a-z]/,{hasSmallCase:true}),
            PatternValidatorsService.patternValidators(/[!@#&%$*+?-[\]{};,:<>]/,{hasSpecialCharacters:true}),
            Validators.minLength(8),
          ]

        )
        
      ]
      ],
      confirm_password: [
        '' ,
      [
        Validators.compose(
          [
            Validators.required,
            PatternValidatorsService.patternValidators(/\d/,{hasNumber:true}),
            PatternValidatorsService.patternValidators(/[A-Z]/,{hasCapitalCase:true}),
            PatternValidatorsService.patternValidators(/[a-z]/,{hasSmallCase:true}),
            PatternValidatorsService.patternValidators(/[!@#&%$*+?-[\]{};,:<>]/, {hasSpecialCharacters:true}), 
                       Validators.minLength(8),
          ]

        )
        
      ]
      ],
    },{validator:ConfirmPasswodService.MatchingPAssword});
  }

  get name(){
    return this.registerForm.get('name');
  }
  get lastname(){
    return this.registerForm.get('lastname');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }


  // form validation
  isFormValid: boolean = false;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);

    if (captchaResponse != null) {
      this.isFormValid = true;
    }
  }



  sign_up() {
    // Vérifiez si les champs du formulaire sont remplis
    if (!this.areFieldsFilled()) {
      $('#signModal').modal('show');
    } else {
      this._router.navigate(['/home']);
    }
  }
  
  areFieldsFilled(): boolean {
    
    return !!this.registerForm.get('name')?.value &&
           !!this.registerForm.get('lastname')?.value &&
           !!this.registerForm.get('email')?.value &&
           !!this.registerForm.get('password')?.value &&
           !!this.registerForm.get('confirm_password')?.value;
  }
  
 
      
    
     
  


}
