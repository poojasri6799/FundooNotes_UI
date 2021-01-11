import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() AllNotes:any;
  

  constructor() { }
  iconvisible:any = false;
  mouseenter(){
    this.iconvisible=true; 
  }

  mouseleave(){
    this.iconvisible=false;
  }

  ngOnInit(): void {
  }

}
