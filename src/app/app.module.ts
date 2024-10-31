import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Import FormsModule 
import { AppComponent } from './app.component';
import { FactureComponent } from './facture/facture.component';  // Import FactureComponent
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';  // Import your routing module
import { NavbarComponent } from './navbar/navbar.component';  // Adjust the path if necessary


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FactureComponent  // Declare FactureComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,  // Import HttpClientModule to handle HTTP requests
    FormsModule        // Import FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
