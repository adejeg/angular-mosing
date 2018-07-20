import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule} from './app-boostrap/app-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { LoginComponent } from './login/login.component';
import { AddSongComponent } from './add-song/add-song.component';
import { SongServiceService } from './song-service.service';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserAccountComponent } from './user-account/user-account.component'


const ROUTES: Routes = [
  {path:"" , component:HomeComponent},
  {path:'add-song' , component:AddSongComponent},
  {path:'songs' , component:SongsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'reset-password' , component:ResetPasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SongsComponent,
    LoginComponent,
    AddSongComponent,
    RegisterComponent,
    ResetPasswordComponent,
    UserAccountComponent,
  ],
  imports: [
    BrowserModule, 
    AppBootstrapModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SongServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
