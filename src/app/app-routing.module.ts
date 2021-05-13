import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: ()=>import('./features/main/main.module').then(m=>m.MainModule)
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./features/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: ()=>import('./features/user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
