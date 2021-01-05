import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private userService: UserService) {}

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }

  ngOnInit(): void {}

  login() {
    let data = {
      mailId: this.Email.value,
      password: this.Password.value,
    };

    this.userService.Login(data).subscribe(
      (result: any) => {
        console.log('login successfully',result);
        localStorage.setItem('token',result['id']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
