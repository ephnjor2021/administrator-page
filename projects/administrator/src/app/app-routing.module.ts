import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingpageComponent} from "./landingpage/landingpage.component";

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'forumpage',
    loadChildren: () =>
      import('forumpage/CommentsModule').then((c) => {
        return c.CommentsModule;
      })
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
