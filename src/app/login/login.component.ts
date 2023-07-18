import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder){
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
      console.log(valueForm.login);
      console.log(valueForm.senha);
    }
  }
}
