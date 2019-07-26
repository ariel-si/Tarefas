import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  configs = {
    
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get senha(): FormControl {
    return <FormControl>this.authForm.get('senha');
  }

  onSubmit(): void {
    console.log('authForm: ', this.authForm.value);
  }

}
