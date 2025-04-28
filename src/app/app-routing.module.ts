import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingHomeComponent } from './components/routing-home/routing-home.component';
import { RoutingAboutComponent } from './components/routing-about/routing-about.component';
import { RoutingContactComponent } from './components/routing-contact/routing-contact.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  {path: '',component:RoutingHomeComponent},
  {path: 'about',component:RoutingAboutComponent, 
    children: [
    { path: 'team', component: AboutTeamComponent },
    { path: 'company', component: AboutCompanyComponent }
  ]},
  {path: 'contact',component:RoutingContactComponent},
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
