import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id!: any;
  client: Client = new Client();
  constructor(private route: ActivatedRoute,
    private router: Router, private clientService: ClientsService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['clientId'];
    
    this.clientService.getClientById(this.id).subscribe(data=> {
      this.client = data;
      console.log(this.client);
    })

  }

  onSubmit() {
    this.clientService.updateClient({
        id: this.id,
        name: this.client.name,
        lastName: this.client.lastName,
        address: this.client.address,
        city: this.client.city,
        email: this.client.email,
        phoneNumber: this.client.phoneNumber

}).subscribe(data => {
    this.clientsList();
    })
  }

  clientsList() {
    this.router.navigate(['clients']);
    alert('Your update was successfull!');
  }

  

}
