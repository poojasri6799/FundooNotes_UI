import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms"


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;

  constructor() { }

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,]);
  FirstName = new FormControl("", [
    Validators.pattern('[a-zA-Z]{2,}')]);
  LastName = new FormControl("", [
    Validators.pattern('[a-zA-Z]{2,}')]);
  ConfirmPassword = new FormControl("", [
    Validators.minLength(8),
    Validators.required,]);


  getEmailErrorMsg() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }


  getFirstNameErrorMsg() {
    return this.FirstName.hasError('required')
      ? 'FirstName is Required'
      : 'please enter valid FirstName';
  }

  getLastNameErrorMsg() {
    return this.LastName.hasError('required')
      ? 'LastName is Required'
      : 'please enter valid LastName';
  }

  getPasswordErrorMsg() {
    return this.Password.hasError('required')
      ? 'Password is Required'
      : 'please enter valid Password';
  }
  getConfirmPasswordErrorMsg() {
    this.ConfirmPassword.hasError('required')
      ? 'ConfirmPassword is Required'
      : 'Password and ConfirmPassword do not match';
  }
  

  ngOnInit() : void{}

  register() {
    let userdata = {
      "FirstName": this.FirstName.value,
      "LastName": this.LastName.value,
      "email": this.Email.value,
      //"phoneNumber": "9604445258",
      "password": this.Password.value,
      "ConfirmPassword": this.ConfirmPassword.value
    }
  }
  
}
