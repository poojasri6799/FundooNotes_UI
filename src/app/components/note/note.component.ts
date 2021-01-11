import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';
import {DataService} from '../../services/dataservices/data.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notesArray = [];
  notes = [];

  constructor(private noteServices: NoteservicesService, private dataservice:DataService) { }

  ngOnInit(): void {
    this.getNote();

    this.dataservice.currentMessage.subscribe((msg)=>{
      console.log(" message ", msg);
      this.getNote();
    })

  }

  receiveMessage($event:any){
    console.log(" message get all notee from craete note",$event);
    this.getNote();
  }

  getNote(){
    let token= localStorage.getItem('token')
    console.log("notes displayed");
    this.noteServices.getdata(token).subscribe((response:any) => {
      console.log(response);
      this.notesArray = response['data']
      console.log(this.notesArray);
      
    })
  }
}
