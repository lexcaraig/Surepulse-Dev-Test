import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'xzy-dashboard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

  buildForm() {
    this.form = this._fb.group({
      username: ['admin', [ Validators.required ]],
      password: ['admin', [ Validators.required ]]
    });
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

}
