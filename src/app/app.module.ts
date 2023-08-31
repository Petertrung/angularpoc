import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { UtilityService } from './utility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { HelpPageComponent } from './Pages/help-page/help-page.component';
import { StructureComponent } from './Pages/structure/structure.component';
import { UploadComponent } from './Pages/upload/upload.component';
import { OrganizationComponent } from './Pages/organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PropertyComponent,
    UnitComponent,
    DashboardComponent,
    PropertProfileComponent,
    HelpPageComponent,
    StructureComponent,
    UploadComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxsModule.forRoot([], {})
  ],
  providers: [UtilityService, NgbTooltip],
  bootstrap: [AppComponent]
})
export class AppModule { }
