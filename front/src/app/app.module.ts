import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizesComponent } from './pages/admin/add-quizes/add-quizes.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import { UpdatQuizComponent } from './pages/admin/updat-quiz/updat-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';
import { LoadquizComponent } from './pages/user/loadquiz/loadquiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: 'three-strings', // Replace with your desired spinner
  fgsColor: '#623aff', // Replace with your desired color
  blur:1,
  fgsSize: 140,
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Icons8_flat_reading.svg/768px-Icons8_flat_reading.svg.png",
  text: "Wait a Sec.",
  textColor: "#b6de54",
  textPosition: "center-center",
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizesComponent,
    AddQuizesComponent,
    LogoutConfirmationDialogComponent,
    UpdatQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UsersidebarComponent,
    LoadquizComponent,
    InstructionsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,
    BrowserModule,
    CKEditorModule,
    MatRadioModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
     
    }),
   

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }