import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-relativeform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class RelativeformComponent {
loginForm=new FormGroup({
  username: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  firstName: new FormControl('',[Validators.required,Validators.minLength(6)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(6)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
      }),
      phone: new FormControl('',[Validators.required,Validators.minLength(10)])
});

loginUser(){
  console.log(this.loginForm.value);
}
get user(){
  return  this.loginForm.get('username');
}
get password(){
  return  this.loginForm.get('password');
}
get firstName(){
  return  this.loginForm.get('firstName');
}
get lastName(){
  return  this.loginForm.get('lastName');
}
get address(){
  return  this.loginForm.get('address');
}
get phone(){
  return  this.loginForm.get('phone');
}
}
