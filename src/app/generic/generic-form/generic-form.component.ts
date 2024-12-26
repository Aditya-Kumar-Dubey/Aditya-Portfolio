import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { GenericButtonComponent } from '../generic-button/generic-button.component';

interface FormField {
  label: string;
  type: string;
  placeholder: string;
  validators?: ValidatorFn[];
}

interface FormConfig {
  title: string;
  description?: string;
  fields: FormField[];
  submitButtonText?: string;
  cancelButtonText?: string;
}

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    GenericButtonComponent
  ],
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'] // Fixed typo
})
export class GenericFormComponent {
  @Input() formConfig!: FormConfig; // Using definite assignment

  formGroup = new FormGroup({});

  ngOnInit() {
    this.formConfig.fields.forEach((field) => {
      this.formGroup.addControl(
        field.label,
        new FormControl('', field.validators || [])
      );
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  onCancel() {
    this.formGroup.reset();
    console.log("Cancle");
  }
}
