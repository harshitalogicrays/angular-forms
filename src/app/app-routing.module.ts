import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { HomeComponent } from './home/home.component';
import { NolayoutComponent } from './layout/nolayout/nolayout.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { TdfformComponent } from './tdfform/tdfform.component';

 const routes: Routes = [
  {path:'',component:MainlayoutComponent,
      children:[
          {path:'',component:HomeComponent},
          {path:'tdfform',component:TdfformComponent}
     ]  },
  {path:'',component:NolayoutComponent,
      children:[
          {path:'**',component:PagenotfoundComponent}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
