import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.route';

@NgModule({
  imports:      [ BrowserModule, FormsModule,routing ],
  declarations: [ AppComponent, HelloComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
