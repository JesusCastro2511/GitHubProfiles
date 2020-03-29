import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GitHubServiceService } from './services/git-hub-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';

var firebaseConfig = {
  apiKey: 'AIzaSyB64c3Az7iTZ6xmC7P0Brmnsz35DLFCNZI',
    authDomain: 'meal-17c0d.firebaseapp.com',
    databaseURL: 'https://meal-17c0d.firebaseio.com',
    projectId: 'meal-17c0d',
    storageBucket: 'meal-17c0d.appspot.com',
    messagingSenderId: '798813284514',
    appId: '1:798813284514:web:4c4b4c234ba5b420210ffb'
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [GitHubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
