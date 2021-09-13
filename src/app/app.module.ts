import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    InputTextComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
