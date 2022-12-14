import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAndTimeMatchComponent } from 'src/app/pages/scripts/categories-and-time-match/categories-and-time-match.component';
import { ScriptsListComponent } from 'src/app/pages/scripts/scripts-list/scripts-list.component';
import { ValidateFrequencyfolderComponent } from 'src/app/pages/scripts/validate-frequencyfolder/validate-frequencyfolder.component';
import { ValidateFullbodyscanComponent } from 'src/app/pages/scripts/validate-fullbodyscan/validate-fullbodyscan.component';
import { ValidateImgfolderComponent } from 'src/app/pages/scripts/validate-imgfolder/validate-imgfolder.component';
import { ValidateTreatmentprogramsComponent } from 'src/app/pages/scripts/validate-treatmentprograms/validate-treatmentprograms.component';

const routes: Routes = [
  { path: '', component: ScriptsListComponent},
  { path: 'category-and-time-match', component: CategoriesAndTimeMatchComponent},
  { path: 'validate-fullbodyscan', component: ValidateFullbodyscanComponent},
  { path: 'validate-imgfolder', component: ValidateImgfolderComponent},
  { path: 'validate-frequencyfolder', component: ValidateFrequencyfolderComponent},
  { path: 'validate-treatmentprograms', component: ValidateTreatmentprogramsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptsRoutingModule { }
