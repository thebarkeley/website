import { Component }      from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig }  from '@angular/material';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  selectedPage:string;

  constructor(public dialog: MatDialog) {
  }

  public openDialog() {
    let config = new MatDialogConfig();
    config.height = '100%';
    config.width = '100%';
    let dialogRef = this.dialog.open(MenuDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      this.selectedPage = result;
      console.log(this.selectedPage)
    });
  }
}
