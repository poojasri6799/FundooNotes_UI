import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservices/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('logged In', 'sucessfully', {
      duration: 3000
    });
  }

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
        localStorage.setItem('token',result['data']['token']);
        localStorage.setItem('Email',result['data']['mailId']);
        console.log(result);
        console.log(localStorage.getItem("token"))
        console.log(localStorage.getItem("Email"))
        this.router.navigate(['dashboard']);
        
      },
      (error) => {
        console.log(error);
        //this.openSnackBar("login successfully")
      }
    );
  }
}
