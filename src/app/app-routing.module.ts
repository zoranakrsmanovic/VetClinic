import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AuthGuardService } from './auth-guard.service';

import { ClientAddComponent } from './client-add/client-add.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OwnersPetsComponent } from './owners-pets/owners-pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { RecordsComponent } from './records/records.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService]},
  { path: 'home', component: HomepageComponent,canActivate:[AuthGuardService]},
  { path: 'pets', component: PetsListComponent,canActivate:[AuthGuardService]},
  { path: 'clients', component: ClientsListComponent,canActivate:[AuthGuardService]},
  { path: 'ownerspets/:ownerId', component: OwnersPetsComponent,canActivate:[AuthGuardService]},
  { path: 'records/:petId', component: RecordsComponent,canActivate:[AuthGuardService]},
  { path: 'addclients', component: ClientAddComponent,canActivate:[AuthGuardService]},
  { path: 'addexamination/:id', component: AddExaminationComponent,canActivate:[AuthGuardService]},
  { path: 'updateclient/:clientId', component: UpdateClientComponent,canActivate:[AuthGuardService]},
  { path: 'updatepet/:petId', component: UpdatePetComponent,canActivate:[AuthGuardService]},
  { path: 'appointments', component: AppointmentsComponent,canActivate:[AuthGuardService]},
  { path: 'addappointments', component: AddAppointmentComponent,canActivate:[AuthGuardService]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
   { path: '404', component: NotFoundComponent},
   { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
