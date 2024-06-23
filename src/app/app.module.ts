import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
// import { AngularFireModule} from '@angular/fire/compat';
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig: any = {
  apiKey: "AIzaSyAXjTqW_Ki4_sIBKwWJXAw8m1fJE_6_61Y",
  authDomain: "contact-form-490c2.firebaseapp.com",
  databaseURL: "https://contact-form-490c2.firebaseio.com",
  projectId: "contact-form-490c2",
  storageBucket: "contact-form-490c2.appspot.com",
  messagingSenderId: "1088368747465",
  appId: "1:1088368747465:web:a052dea2c3ffcf5e"
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(firebaseConfig))
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
