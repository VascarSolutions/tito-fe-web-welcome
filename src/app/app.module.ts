import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignUpVerificationComponent } from './sign-up-verification/sign-up-verification.component';

// Service
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: SignUpVerificationComponent },
  { path: 'activation/:userId/:token', component: SignUpVerificationComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [AppComponent, SignUpVerificationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
