import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {SLoginComponent} from './login/slogin.component';
import { routing } from './app.route';

@NgModule({
  imports:      [ BrowserModule, FormsModule,routing,NgbModule ],
  declarations: [ AppComponent, HelloComponent,LoginComponent,RegisterComponent,SLoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
