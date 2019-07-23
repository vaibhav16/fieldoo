import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { Error404Component } from './common/error404/error404.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginModalComponent } from './common/login-modal/login-modal.component';
import { SignupModalComponent } from './common/signup-modal/signup-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { LoaderComponent } from './common/loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlayerInfoComponent,
    Error404Component,
    HeaderComponent,
    FooterComponent,
    LoginModalComponent,
    SignupModalComponent,
    LoaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
