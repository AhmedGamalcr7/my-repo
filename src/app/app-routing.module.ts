import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundedPageComponent } from './not-founded-page/not-founded-page.component';

const routes: Routes = [
  {path:"" ,redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent,title:"home"},
  {path:'about',component:AboutComponent,title:"about"},
  {path:'projects',component:ProjectsComponent,title:"projects"},
  {path:'blog',component:BlogComponent,title:"blog"},
  {path:'contact',component:ContactComponent,title:"contact"},
  {path:'**',component:NotFoundedPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
