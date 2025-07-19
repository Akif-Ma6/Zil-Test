import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.maxLength(5)]],
        lastName: ['', [Validators.maxLength(10)]],
        age: [0, [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        terms: [false, [Validators.requiredTrue]]
      },
      { validators: this.passwordMatchValidator } 
    );
  }

  // Password Match Check
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirmpass = group.get('confirmPassword')?.value;

    return pass === confirmpass ? null : { passwordMismatch: true };
  }
// Submission
  submit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched(); // Show all validation messages
    }
  }
}
