import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  //@Output() change1 = new EventEmitter<any>();
  reset = true

  constructor(private note: NoteservicesService) { }

  ngOnInit(): void {
  }

  title = new FormControl();
  message = new FormControl();
  notePinned = false;
  card = false;
  reminder = false;

  addNote() {
    let noteData = {
      "title": this.title.value,
      "message": this.message.value
    }

    // this.note.addNotes(noteData).subscribe(response:any => {
    //   this.change1.emit();
      
    // }

    //)
  }

}
