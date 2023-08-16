import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyComponent } from './Pages/property/property.component';
import { UnitComponent } from './Pages/unit/unit.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PropertProfileComponent } from './Pages/property/Profile/propert-profile/propert-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PropertyComponent,
    UnitComponent,
    DashboardComponent,
    PropertProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
