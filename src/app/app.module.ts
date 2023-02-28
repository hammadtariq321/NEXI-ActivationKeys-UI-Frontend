import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogHTMLComponent } from './components/dialog-html/dialog-html.component';
import { EditComponent } from './pages/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { CategoriesAndTimeMatchComponent } from './pages/scripts/categories-and-time-match/categories-and-time-match.component';
import { ScriptsListComponent } from './pages/scripts/scripts-list/scripts-list.component';
import { ValidateFullbodyscanComponent } from './pages/scripts/validate-fullbodyscan/validate-fullbodyscan.component';
import { ValidateImgfolderComponent } from './pages/scripts/validate-imgfolder/validate-imgfolder.component';
import { ValidateFrequencyfolderComponent } from './pages/scripts/validate-frequencyfolder/validate-frequencyfolder.component';
import { SnackbarSuccessComponent } from './components/snackbar-success/snackbar-success.component';
import { DateAdapter } from '@angular/material/core';
import { ValidateTreatmentprogramsComponent } from './pages/scripts/validate-treatmentprograms/validate-treatmentprograms.component';
import { HistoryComponent } from './pages/history/history.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    DialogHTMLComponent,
    EditComponent,
    SnackbarComponent,
    LoginComponent,
    HistoryComponent,
    CategoriesAndTimeMatchComponent,
    ScriptsListComponent,
    ValidateFullbodyscanComponent,
    ValidateImgfolderComponent,
    ValidateFrequencyfolderComponent,
    SnackbarSuccessComponent,
    ValidateTreatmentprogramsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-in"); // DD/MM/YYYY
  }
 }
