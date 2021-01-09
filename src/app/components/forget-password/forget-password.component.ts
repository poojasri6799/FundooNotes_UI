import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservices/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private userService: UserService,private snackBar: MatSnackBar) { }
  openSnackBar() {
    this.snackBar.open('Mail sent', 'sucessfully', {
      duration: 1500
    });
  }


  Email = new FormControl('', [Validators.email, Validators.required]);
  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  ngOnInit(): void {}
  
  forget() {
    let data = {
      mailId: this.Email.value
    };

    this.userService.forgot(data).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
