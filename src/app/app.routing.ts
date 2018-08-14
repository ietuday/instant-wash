import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CallComponent } from './call/call.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'call', component: CallComponent },
  // { path: 'dashboard', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(routes);
