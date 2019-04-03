import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { SLoginComponent } from './login/slogin.component';


export const myroutes:Routes =[
   { path:'' , redirectTo:'/home', pathMatch :'full'},
   { path:'hello',component:HelloComponent},
   //{path:'login',component:LoginComponent},
 {path:'login',component:LoginComponent,children:[
      { path:'newregister',component:RegisterComponent },
      { path:'userlogin',component:SLoginComponent },
    ]},

]
export const routing = RouterModule.forRoot(myroutes);

