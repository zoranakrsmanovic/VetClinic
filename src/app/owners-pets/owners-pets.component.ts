import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';


import { PetService } from '../pet.service';
import { Records } from '../records';

@Component({
  selector: 'app-owners-pets',
  templateUrl: './owners-pets.component.html',
  styleUrls: ['./owners-pets.component.css']
})
export class OwnersPetsComponent implements OnInit {

  id!: string;
  pet: Records = new Records();
  record: any;
  owner: any;
  empty =  false;




  constructor(private _ativatedRoute: ActivatedRoute,
    public route: Router, private petService: PetService, private router: Router, clientService: ClientsService) { }




  ngOnInit(): void {


     this.getPets();
     

  }

  getPets(){
    this.id = this._ativatedRoute.snapshot.params['ownerId'];
    this.record = new Records();
    this.petService.getPetsByOwnerId(this.id).subscribe(
      data => {

        this.record = data;
        console.log(this.record.length);

        
          if(this.record.length === 0){
            this.empty = true;
            console.log("empty")
          }else{
            this.empty = false;
            console.log("not empty")
          }
      }
     
    )
  }





  getPetId(petId: string) {
    this.router.navigate(['records', petId]);
    console.log(petId);
  }

  savePet() {
    this.petService.addPet({

      age: this.pet.age,
      name: this.pet.name,
      id: this.pet.id,
      alergies: this.pet.alergies,
      type: this.pet.type,
      weight: this.pet.weight,
      owner: this.id,
      breed: this.pet.breed

    }).subscribe(data => {
      console.log(data);
      window.location.reload();
    }),
      (error: any) => console.log(error);
  }

  onSubmit() {
    alert("Pet is added!")
    this.savePet();
  }

  deletePet(id: string) {
    this.petService.deletePet(id).subscribe(data => {
      window.location.reload();
      
    })
  }

  editPet(petId: string) {
    this.router.navigate(['updatepet', petId]);
  }

  isEmpty(){
    if(this.record.length === 0){
      this.empty = true;
      console.log("empty")
    }else{
      this.empty = false;
      console.log("not empty")
    }
    
   
  }








}
