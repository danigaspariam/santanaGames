import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private readonly router: Router,){
    this.form = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  public onSubmit(){
    this.form.get("login");
    this.form.get("senha");
    console.log(this.form)
    if(this.form.valid){
      const valueForm = this.form.value;
      this.router.navigate(['cadastro-nota']);
    }
  }
}
