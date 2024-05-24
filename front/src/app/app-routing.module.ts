import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './Services/admin.guard';
import { normalGuard } from './Services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizesComponent } from './pages/admin/add-quizes/add-quizes.component';
import { UpdatQuizComponent } from './pages/admin/updat-quiz/updat-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadquizComponent } from './pages/user/loadquiz/loadquiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [


 
  {

    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {

    path: 'signup',
   component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,

      },
      {
        path:'add-categories',
        component:AddCategoriesComponent
      },
      {
        path:'view-quize',
        component:ViewQuizesComponent
      },
      {
        path:'add-quizes',
        component:AddQuizesComponent
      },
      {
        path:'quiz/:qid',
        component:UpdatQuizComponent
      },
      {
        path:'view-questions/:id/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question/:id/:title',
        component:AddQuestionComponent
      }
      
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[normalGuard],
    children:[

      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:':catId',
        component:LoadquizComponent
      },
      {
        path:'instructions/:qid',
        component:InstructionsComponent
      },

   
    ]

  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate:[normalGuard],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
