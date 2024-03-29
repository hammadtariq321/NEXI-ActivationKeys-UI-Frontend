import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptsModule } from './modules/scripts/scripts.module';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EditComponent } from './pages/edit/edit.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesAndTimeMatchComponent } from './pages/scripts/categories-and-time-match/categories-and-time-match.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'scripts', loadChildren: () => import('./modules/scripts/scripts.module').then(m => m.ScriptsModule) , canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
