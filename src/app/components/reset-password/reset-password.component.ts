import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservices/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private userService: UserService, private route:ActivatedRoute,private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('Reset password', 'sucessfully', {
      duration: 1500
    });
  }

  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);


  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }

  ngOnInit(): void {
  }

  reset() {
    let token = this.route.snapshot.params.token;
    console.log(token);
    let data = {
      newPassword: this.Password.value
    };
    this.userService.resetpass(data, token).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
