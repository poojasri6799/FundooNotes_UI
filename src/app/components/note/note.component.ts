import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notesArray = [];

  constructor(private noteServices: NoteservicesService) { }

  ngOnInit(): void {
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
