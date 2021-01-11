import { Component, Input, OnInit, Output } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';
import { FormControl } from '@angular/forms';
import {  EventEmitter } from '@angular/core';


@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  reset = true

  constructor(private noteServices: NoteservicesService) { }
  @Output() messageEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  title = new FormControl();
  message = new FormControl();
  
  addNote() {
    let noteData = {
      "title": this.title.value,
      "message": this.message.value
    }
    let token = localStorage.getItem('token')
    console.log('note added successfully');
    this.noteServices.add(noteData, token).subscribe(response =>{
      console.log(response);
      this.messageEvent.emit();
    })
  }
}





















