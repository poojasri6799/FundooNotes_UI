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
  // title: any;
  // message: any;
  // noteId: any;

  title = new FormControl();
  message= new FormControl();
  noteId= new FormControl();

  constructor(
    private noteService: NoteservicesService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(' note data in update', data);
    (this.title = data.note.title),
      (this.message = data.note.message),
      (this.noteId = data.note.noteId);
  }

  pin:any;

  ngOnInit(): void {}

  updateData(data1:any) {
    let data = {
      noteId: this.noteId.value,
      title: this.title.value,
      message: this.message.value,
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
