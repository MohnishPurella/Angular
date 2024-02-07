import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/username.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './service/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ){}

  registrationForm!: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: ['Mohnish', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.formBuilder.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.formBuilder.array([])
    }, {validators: PasswordValidator})

    this.registrationForm.get('subscribe')?.valueChanges.subscribe((value) => {
      const emailControl = this.registrationForm.get('email');
      if (value) {
        emailControl?.setValidators([Validators.required, Validators.email]); // Add validators
      } else {
        emailControl?.clearValidators(); // Clear validators
      }
      emailControl?.updateValueAndValidity(); // Update control validity
    });
  }

  get alternateEmail(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmail.push(this.formBuilder.control(''));
  }

  get registrationFormControl() {return this.registrationForm.controls}

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Mohnish'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  loadAPIData(){
    this.registrationForm.patchValue({
      userName: 'Barry',
      password: 'passCode',
      confirmPassword: 'passCode'
    });
  }

  onSubmit(){
    this.registrationService.register(this.registrationForm.value).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
