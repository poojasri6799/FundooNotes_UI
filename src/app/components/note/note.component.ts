import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from '../../services/noteservice/noteservices.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
