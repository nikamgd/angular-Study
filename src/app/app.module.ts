import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { loginComponent } from './Login/login.component';
import { NoEncapsulationComponent } from './Encapsulation/no-encapsulation.components';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewComponent,
    loginComponent,
    NoEncapsulationComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
