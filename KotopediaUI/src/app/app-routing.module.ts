import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './components/pages/registeration/registeration.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
                         {path:"", component:HomeComponent},
                          {path:"home", component:HomeComponent},
                          {path:"about",component:AboutComponent},
                          {path:"registeration", component:RegisterationComponent},


                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
