import { Component } from '@angular/core';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {
  fun(){
    console.log("test");
  }
}