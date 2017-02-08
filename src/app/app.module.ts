import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDialog, MdDialogRef } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BoardingComponent } from './boarding/boarding.component';
import { DaycareComponent } from './daycare/daycare.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { GroomingComponent } from './grooming/grooming.component';
import { TrainingComponent } from './training/training.component';
import { WalkingComponent } from './walking/walking.component';
import { AmandaComponent } from './amanda/amanda.component';
import { FaqComponent } from './faq/faq.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BoardingComponent,
    ContactComponent,
    HeaderComponent,
    DaycareComponent,
    FooterComponent,
    RegisterComponent,
    GroomingComponent,
    TrainingComponent,
    WalkingComponent,
    AmandaComponent,
    FaqComponent,
    MenuDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MenuDialogComponent]
})
export class AppModule { }
