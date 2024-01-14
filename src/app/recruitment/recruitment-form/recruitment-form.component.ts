import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  submitForm() {
    if (this.form.valid) {
      // Handle form submission
      console.log('Form submitted:', this.form.value);
    } else {
      // Handle form validation errors
      console.error('Form validation failed');
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return control!.invalid && control!.touched;
  }

}
