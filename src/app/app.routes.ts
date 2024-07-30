import { Routes } from '@angular/router';

// Importamos todos los componentes  de las vistas
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserNewComponent } from './views/user-new/user-new.component';
import { UserEditComponent } from './views/user-edit/user-edit.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'user-new', component:UserNewComponent},
    {path:'user-edit', component:UserEditComponent}
];
  
