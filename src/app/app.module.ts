import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import {MaterialExampleModule} from '../material.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule, } from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    BrowserModule,  BrowserAnimationsModule,
    MatButtonModule, MatTabsModule,  MatCardModule,        
    MatNativeDateModule,  MaterialExampleModule, 
    MatBadgeModule,  MatIconModule,  
    FormsModule, 
    HttpClientModule, 
    ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }