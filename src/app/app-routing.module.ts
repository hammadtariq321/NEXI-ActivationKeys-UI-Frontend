import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptsModule } from './modules/scripts/scripts.module';
import { EditComponent } from './pages/edit/edit.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesAndTimeMatchComponent } from './pages/scripts/categories-and-time-match/categories-and-time-match.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'scripts', loadChildren: () => import('./modules/scripts/scripts.module').then(m => m.ScriptsModule)},
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
