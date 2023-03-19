import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit{
  form:FormGroup
  result:any;
show:boolean = false;


  cars = [
    'Volvo' ,
   'Saab',
    'Opel',
   'Audi',
];

  constructor(
    private fb:FormBuilder
  ) {
    this.form = this.fb.group({});
    this.contactFrom()
   }

  ngOnInit(): void {
    this.creatForm();
    
    console.log(this.show);
   
  }

  creatForm(){
    this.form = this.fb.group(
      {
        fName: [null],
        lName: [null],
        addresses: this.addressForm(),
        contacts: this.fb.array([this.contactFrom()])
      }
    );
  }

  addressForm(){
    return this.fb.group(
      {
        address1: [null],
        address2: [null],
        country: [null],
        state: [null]
      }
    )
  }

  get addresses(){
  return this.form.get("addresses") as FormGroup;
  }


  get contacts(){
    // this. addressForm().get("contacts") as FormArray
    return this.form.get("contacts") as FormArray;
    }

  contactFrom(){
    return this.fb.group(
      {
        phone: [null],
        email: [null],
        Number:[null],
        car:[this.cars[1]],
        targets:this.fb.array([this.targetForm()]),
        targetinput:this.fb.array([this.targetInput()])
      }
    );
  }
// -------------------------- target ------------------------
  get targets(){
    return this.contactFrom().get("targets") as FormArray;
  } 
  get targetinput(){
    return this.contactFrom().get("targetinput") as FormArray;
  } 

  targetForm(){
    
    return this.fb.group(
      
      {
      min:["5"],
      max:["15"],
    })
  }
  targetInput(){
    return this.fb.group({
      input:["input1"]
      
    })
  }
  // change
  onSelected(event:any){
    console.log( event );
 
this.show=event==="volvo"
    console.log(this.show);
    

  }
// --------------------------------
  onSave(){
    console.log(this.form.getRawValue())
    this.result = this.form.getRawValue();
  }

  addNewContacts(){
    this.contacts.push(this.contactFrom());
  }

  removeContact(i:Required<number>){
    this.contacts.removeAt(i);
  }
}
