import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routes';

import { MaterialModule } from '@angular/material';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SafePipe } from './about/safe.pipe';
import { RemoveQuotesPipe } from './projects/remove-quotes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    HeaderComponent,
    SafePipe,
    RemoveQuotesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
