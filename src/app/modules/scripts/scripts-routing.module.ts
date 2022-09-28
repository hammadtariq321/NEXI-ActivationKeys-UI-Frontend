import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAndTimeMatchComponent } from 'src/app/pages/scripts/categories-and-time-match/categories-and-time-match.component';

const routes: Routes = [
  { path: '', component: CategoriesAndTimeMatchComponent},
  // { path: 'category-and-time-match', component: CategoriesAndTimeMatchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptsRoutingModule { }
