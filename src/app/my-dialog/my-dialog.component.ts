import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  encapsulation: ViewEncapsulation.None
  constructor(public matDialogRef: MatDialogRef<MyDialogComponent>) { }

  ngOnInit(): void {
  }

  public close(){
    this.matDialogRef.close();
  }

}
