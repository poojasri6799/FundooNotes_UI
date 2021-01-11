import { Component, OnInit, Inject } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  title: any;
  message: any;
  noteId: any;

  constructor(
    private noteService: NoteservicesService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(' note data in update', data);
      this.noteId = data.note.noteId,
      console.log("note id ",this.noteId),
      this.title = data.note.title,
      this.message = data.note.message;
      
  }

  ngOnInit(): void {}

  updateData() {
    let data = {
      noteId: this.noteId,
      title: (<HTMLInputElement>document.getElementById('abc')).value,
      message: (<HTMLInputElement>document.getElementById('xyz')).value
    };

    console.log('success ', data);
    let token = localStorage.getItem('token');
    this.noteService.updateNote(token, data).subscribe((response) => {
      console.log(' updated successfull', response);
      this.onNoClick();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
