import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';


import { AlertModule } from 'ngx-bootstrap';
import { TwowayDataBindingComponent } from './twoway-data-binding/twoway-data-binding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';




@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    TwowayDataBindingComponent,
    DataBindingComponent,
    InputPropertyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
