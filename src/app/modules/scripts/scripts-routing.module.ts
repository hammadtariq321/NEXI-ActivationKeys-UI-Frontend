import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAndTimeMatchComponent } from 'src/app/pages/scripts/categories-and-time-match/categories-and-time-match.component';
import { ScriptsListComponent } from 'src/app/pages/scripts/scripts-list/scripts-list.component';
import { ValidateFullbodyscanComponent } from 'src/app/pages/scripts/validate-fullbodyscan/validate-fullbodyscan.component';

const routes: Routes = [
  { path: '', component: ScriptsListComponent},
  { path: 'category-and-time-match', component: CategoriesAndTimeMatchComponent},
  { path: 'validate-fullbodyscan', component: ValidateFullbodyscanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptsRoutingModule { }
