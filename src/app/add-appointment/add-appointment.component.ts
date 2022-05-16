import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Appointments } from '../appointments';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointment: Appointments = new Appointments();
  constructor(private appointmentService: AppointmentsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAppointment() {
    this.appointmentService.addAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointmentsByDate();
    }),
      ( error: any) => alert(error);
  }

  goToAppointmentsByDate() {
    this.router.navigate(['/appointments']);
  }

  onSubmit() {
    alert("New appointment has been added!")
    this.saveAppointment();
  }




}
