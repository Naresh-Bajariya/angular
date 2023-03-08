import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  date=new Date(1996,8,22)
employees:any[]=[
  {
    code:"emp001",
    name:"Parth",
    salary:85000,
     dob:"08/03/2023"
  },
  {
    code:"emp002",
    name:"Ram",
    salary:125000,
     dob:"10/03/2022"
  },
  {
    code:"emp003",
    name:"Axay",
    salary:55000,
     dob:"15/07/2020"
  },
]
}
