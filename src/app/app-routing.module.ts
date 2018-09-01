import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }     from './about/about.component';
import { BoardingComponent }  from './boarding/boarding.component';
import { DaycareComponent}    from './daycare/daycare.component';
import { FaqComponent}        from './faq/faq.component';
import { GroomingComponent }  from './grooming/grooming.component';
import { RegisterComponent }  from './register/register.component';

const routes:Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'boarding', component: BoardingComponent},
  {path: 'daycare', component: DaycareComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'grooming', component: GroomingComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
