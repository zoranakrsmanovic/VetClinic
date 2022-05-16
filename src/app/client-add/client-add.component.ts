import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  client: Client = new Client();
  constructor( private clientService: ClientsService, private router:Router) { }

  ngOnInit(): void {
  }

  saveClient() {
    this.clientService.addClient(this.client).subscribe(data => {
      console.log(data);
      this.backToClientList();
    }),
      ( error: any) => alert(error);
  }

  backToClientList() {
    this.router.navigate(['/clients']);
  }

  onSubmit() {
    alert("New client has been added!")
    this.saveClient();
  }


}
