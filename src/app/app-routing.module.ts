import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

//Pages in Navigation
import { PropertyComponent } from './Pages/property/property.component';
import { UnitComponent } from './Pages/unit/unit.component';
import { StructureComponent } from './Pages/structure/structure.component';
import { HelpPageComponent } from './Pages/help-page/help-page.component';

//Profile pages
import { PropertProfileComponent } from './Pages/property/Profile/propert-profile/propert-profile.component';
import { UploadComponent } from './Pages/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'property',
        component: PropertyComponent,
      },
      {
        path: 'unit',
        component: UnitComponent,
      },
      {
        path: 'property/:id',
        component: PropertProfileComponent,
      },
      {
        path: 'structure',
        component: StructureComponent,
      },
      {
        path: 'help',
        component: HelpPageComponent,
      },
      {
        path: 'upload',
        component: UploadComponent,
      }
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
