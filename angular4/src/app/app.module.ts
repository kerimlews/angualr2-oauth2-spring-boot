import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ImageDetailComponent } from './image/image-detail/image-detail.component';
import {AuthGuardService} from './authServices/auth-guard.service';
import {AuthServiceService} from './authServices/auth-service.service';
const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'image' , component: ImageComponent , canActivate: [AuthGuardService]},
  { path: 'user' , component: UserComponent , canActivate: [AuthGuardService]},
  { path: 'login' , component: LoginComponent },
  { path: 'registrer' , component: RegistrationComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
