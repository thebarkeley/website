import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmandaComponent }    from './amanda/amanda.component';
import { AboutComponent }     from './about/about.component';
import { BoardingComponent }  from './boarding/boarding.component';
import { DaycareComponent}    from './daycare/daycare.component';
import { FaqComponent}        from './faq/faq.component';
import { GroomingComponent }  from './grooming/grooming.component';
import { ContactComponent }   from './contact/contact.component';
import { RegisterComponent }  from './register/register.component';
import { TrainingComponent }  from './training/training.component';
import { WalkingComponent }   from './walking/walking.component';

const routes:Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'amanda', component: AmandaComponent},
  {path: 'boarding', component: BoardingComponent},
  {path: 'daycare', component: DaycareComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'grooming', component: GroomingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'walking', component: WalkingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
