import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})

export class AppComponent {
  title = 'my-app';
  // two way data binding
  data:any='Naresh';
  data1:string='Mahesh';
  msg:string='';
  constructor (private _messageService:MessageService){
    
  }
  ngOnInit(){
this.msg=this._messageService.getmessage();
  }
}
