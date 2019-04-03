import {Routes,RouterModule} from '@angular/Router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


export const myroutes:Routes =[
   { path:'' , redirectTo:'/home', pathMatch :'full'},
  {path:'login',component:LoginComponent},

]
export const routing = RouterModule.forRoot(myroutes);

