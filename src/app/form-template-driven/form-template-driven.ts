import { Component, NgModule } from '@angular/core';
import { UserModel } from '../../models/usermodel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  imports: [FormsModule],
  templateUrl: './form-template-driven.html',
  styleUrl: './form-template-driven.css',
})
export class FormTemplateDriven {
  protected readonly user : UserModel = {
    username : '',
    password : ''
  }

  login(): void {
    console.log(this.user)
  }
}
