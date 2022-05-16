import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnersPetsComponent } from './owners-pets/owners-pets.component';
import { RecordsComponent } from './records/records.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SortAppointmentsPipe } from './sort-appointments.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    PetsListComponent,
    ClientsListComponent,
    HomepageComponent,
    OwnersPetsComponent,
    RecordsComponent,
    ClientAddComponent,
    AddExaminationComponent,
    UpdateClientComponent,
    UpdatePetComponent,
    AppointmentsComponent,
    AddAppointmentComponent,
    SortAppointmentsPipe,
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
