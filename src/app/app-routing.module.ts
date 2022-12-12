import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { BodyComponent } from './body/body.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'contact-success', component: ContactSuccessComponent },
  { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
