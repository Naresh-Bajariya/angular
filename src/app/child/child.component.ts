import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title="welcome Interpolation"
  firstname:string="Naresh"
  //  Property binding and interpolation
  itemImageUrl = '../assets/photo-1557180295-76eee20ae8aa.avif';
  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';
  // two way data binding
data:string='Naresh';
data2:string="badal";
constructor(){}
countrydetails:any[]=[
  {
    'country':'india',
    'people':[
      {
        "name":"Naresh"
      },
      {
        "name":"Renish"
      },
      {
        "name":"Mahesh"
      },
    ]
  },
  {
    'country':'UK',
    'people':[
      {
        "name":"abc"
      },
      {
        "name":"xyz"
      },
      {
        "name":"yzx"
      },
    ]
  }
]
people:any[]=[
  {
    "name":"Ajay",
    "country":"India"
  },
  {
    "name":"Mehul",
    "country":"UK"
  },
  {
    "name":"Kirit",
    "country":"Japan"
  },
  {
    "name":"Badal",
    "country":"Us"
  }
];
getcolor(country: any): any{
  switch(country)
  {
case"India":
return "green";
case"Us":
return "red";
case"Japan":
return "blue";
case"UK":
return "pink";

  }
}
getcssclass(flag:string){
 
  let cssclass;
  if(flag=="mode")
  {
    cssclass={
      'one':true,
      'two':true,
    }
  }else{
    cssclass={
      'one':false,
      'two':true,
    }
  }
  return cssclass
}
// event binding
showdata(){
  alert("event binding call")
}

}
