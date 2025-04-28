import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { ServiceMessageSenderComponent } from './components/service-message-sender/service-message-sender.component';
import { ServiceMessageReceiverComponent } from './components/service-message-receiver/service-message-receiver.component';
import { RoutingHomeComponent } from './components/routing-home/routing-home.component';
import { RoutingAboutComponent } from './components/routing-about/routing-about.component';
import { RoutingContactComponent } from './components/routing-contact/routing-contact.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpUserComponent } from './components/http-user/http-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    DataBindingComponent,
    DirectivesComponent,
    ServiceMessageSenderComponent,
    ServiceMessageReceiverComponent,
    RoutingHomeComponent,
    RoutingAboutComponent,
    RoutingContactComponent,
    AboutTeamComponent,
    AboutCompanyComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HttpUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
