import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
// import { DynamicComponent } from './dynamic/dynamic.component';
import { AbcdeComponent } from './abcde/abcde.component';
import { AbcdefComponent } from './abcdef/abcdef.component';
import { JasComponent } from './jas/jas.component';
// import { Trending1Component } from './trending1/trending1.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    // DynamicComponent,

    AbcdeComponent,
    AbcdefComponent,
    JasComponent,
    // Trending1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
