import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageServiceComponent } from './page-service/page-service.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'about',
    component: PageAboutComponent,
  },
  {
    path: 'contact',
    component: PageContactComponent,
  },
  {
    path: 'service',
    component: PageServiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
