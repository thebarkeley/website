import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css']
})

export class MenuDialogComponent {
  constructor(public dialogRef:MdDialogRef<MenuDialogComponent>) {
  }
}
