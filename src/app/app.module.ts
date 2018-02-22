import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { UserService } from './shared/user.service';
import { AuthentificationService } from './shared/authentification.service';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterService } from './shared/register.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    AuthentificationService,RegisterService,
    UserService,
    AuthguardGuard,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }