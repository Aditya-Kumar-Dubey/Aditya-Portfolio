import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileForm: FormGroup;
  isEditing = false;
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '9998476567',
    bio: 'Software developer with a passion for creating user-friendly applications.'
  };

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      bio: ['']
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.profileForm.patchValue(this.user);
  }

  toggleEdit() {
    this.isEditing = true;
    this.initializeForm();
  }

  cancelEdit() {
    this.isEditing = false;
    this.profileForm.reset(this.user);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.user = { ...this.profileForm.value };
      this.isEditing = false;
    }
  }
}
