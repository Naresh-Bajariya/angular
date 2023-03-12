import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})
export class FormComponent implements OnInit {
  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";

  constructor(private fb:FormBuilder) {
    this.signupForm =fb.group({
      fname:["",Validators.required],
      lname:["",Validators.required],
      email:["",Validators.email],
      password:["",Validators.required],
    })
  }

  
 ngOnInit(){
 
 }

 PostData(signupForm:any) {
  this.FirstName=signupForm.controls.fname.value;
  this.LastName=signupForm.controls.lname.value;
  this.Email=signupForm.controls.email.value;
  this.Password=signupForm.controls.password.value;
  console.log(this.FirstName);
  
console.log("hello",signupForm.value);

 }

 

 
}
