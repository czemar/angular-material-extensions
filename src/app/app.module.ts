import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { DarkBackgroundComponent } from './components/dark-background/dark-background.component';
import { IconComponent } from './components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburgerButtonComponent } from './components/hamburger-button/hamburger-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    SidebarComponent,
    SidebarItemComponent,
    DarkBackgroundComponent,
    IconComponent,
    NavbarComponent,
    HamburgerButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AppComponent,
    InputTextComponent,
    SidebarComponent,
    SidebarItemComponent,
    DarkBackgroundComponent,
    IconComponent,
    NavbarComponent,
    HamburgerButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
