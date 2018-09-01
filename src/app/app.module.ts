import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatDialogModule, MatDialogRef, MatListModule, MatGridListModule, MatSelectModule, MatTabsModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { BoardingComponent } from './boarding/boarding.component';
import { DaycareComponent } from './daycare/daycare.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { GroomingComponent } from './grooming/grooming.component';
import { FaqComponent } from './faq/faq.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BoardingComponent,
    HeaderComponent,
    DaycareComponent,
    FooterComponent,
    RegisterComponent,
    GroomingComponent,
    FaqComponent,
    MenuDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MenuDialogComponent]
})
export class AppModule { }
