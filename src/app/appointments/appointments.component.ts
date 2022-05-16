import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Appointments } from '../appointments';
import { AppointmentsService } from '../appointments.service';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  date:any;
  appointments: any;
  SortDirection = 'asc';
  empty = false;
  constructor(private appointmentService: AppointmentsService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {

    this.date = formatDate(Date.now(),'yyyy-MM-dd',this.locale);

    this.appointments = new Appointments();
    this.appointmentService.getAppointmentsByDate(this.date).subscribe(
      data => {

    
        this.appointments = data;

        
        if(this.appointments.length === 0){
          this.empty = true;
          console.log("empty")
        }else{
          this.empty = false;
          console.log("not empty")
        }

        console.log(this.appointments);
      }
    )

  }
 
 

  getAppoitmentsByDate(){
    var inputValue = (<HTMLInputElement>document.getElementById("date")).value;

    this.appointments = new Appointments();
    this.appointmentService.getAppointmentsByDate(inputValue).subscribe(
      data => {

        this.appointments = data;

        if(this.appointments.length === 0){
          this.empty = true;
          console.log("empty")
        }else{
          this.empty = false;
          console.log("not empty")
        }


        console.log(this.appointments);
      }
    )
  }


     
      
  

 

}
