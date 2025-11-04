import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-code-driven',
  imports: [ReactiveFormsModule],
  templateUrl: './form-code-driven.html',
  styleUrl: './form-code-driven.css',
})
export class FormCodeDriven {
  private readonly fb = inject(FormBuilder)
  protected readonly usernameCtrl = this.fb.control('', [Validators.required, Validators.minLength(7), Validators.maxLength(25)])
  protected readonly emailCtrl = this.fb.control('', [Validators.required, Validators.email])
  protected readonly passwordCtrl = this.fb.control('', [Validators.required, Validators.minLength(12), Validators.maxLength(20)])
  protected readonly userForm = this.fb.group({
    username: this.usernameCtrl,
    email: this.emailCtrl,
    password: this.passwordCtrl
  })

  register(): void {
    console.log(this.userForm.value)
  }

  setJohnDoe(): void {
    this.usernameCtrl.setValue("John Doe")
    this.emailCtrl.setValue("john@doe.com")
    this.passwordCtrl.setValue("Abcd1234Dcba!")
  }
}
