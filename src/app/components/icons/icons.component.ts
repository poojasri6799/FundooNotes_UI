import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';
import {DataService} from '../../services/dataservices/data.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private noteServices:NoteservicesService, private dataServices:DataService) { }

  ngOnInit(): void {
  }

  @Input() note:any

  deleteNote(){
    console.log(this.note);
    let data = {
    
      noteId: [this.note.id],
      isTrash: true
    }
    let token = localStorage.getItem('token')
    this.noteServices.deleteNotes(data,token).subscribe((response)=>{
      console.log(" deleted sucessfull ");
      this.dataServices.changeMessage("deleted");
      
    });
  }

}
