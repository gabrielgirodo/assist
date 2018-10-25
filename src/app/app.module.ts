import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopCUComponent } from './top-cu/top-cu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FunctionAreaKDComponent } from './function-area-kd/function-area-kd.component';
import { topCUService } from './shared/Service/topCU.Service';
import { functionAreaKDService } from './shared/Service/functionAreaKD.Service';
import { HeaderComponent } from './header/header.component';
import { LanguageComponent } from './header/language/language.component';
import { TestComponent } from './test/test.component';
import { WhateverComponent } from './whatever/whatever.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCUComponent,
    FunctionAreaKDComponent,
    HeaderComponent,
    LanguageComponent,
    TestComponent,
    WhateverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [topCUService, functionAreaKDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
