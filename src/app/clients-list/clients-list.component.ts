import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})


export class ClientsListComponent implements OnInit {

  page: number = 1;
  total: number = 50;
  loading: boolean = false;
  panelOpenState = false;

 
  clients: Client[] = [];

  public config: PaginationInstance = {
    id: 'server',
    itemsPerPage: 3,
    currentPage: this.page,
    totalItems: this.total
  };




  constructor(private clientsServise: ClientsService, private router: Router) { }


  
  
  ngOnInit(): void {
   
    this.getClients(1);
  }


  public getClients(page: any) {
     this.page = page;
    this.loading = true;
    this.clientsServise.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
        this.config.currentPage = page;
        this.total = this.clients.length ;
        this.loading = false;
        console.log(response);
      }
    );
  }

  getOwnerId(ownerId: string) {
    this.router.navigate(['ownerspets', ownerId]);
    console.log(ownerId);
  }

  editClient(clinetId: string) {
    this.router.navigate(['updateclient', clinetId]);
  }

  deleteClient(id: string) {
    this.clientsServise.deleteClient(id).subscribe(data => {
      console.log(data)
      this.getClients(1);
    })
  }



  searchClient(key: string): void{
    const results: Client[] = [];
    for (const client of this.clients){
      if(client.lastName.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      ){
         results.push(client);
      }
      if(client.email.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      ){
         results.push(client);
      }
     
      if(client.phoneNumber.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      ){
         results.push(client);
      }
    }
    this.clients = results;
    if(results.length === 0 || !key){
      this.getClients(1);
    }
 }






}
