import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';
import { Records } from '../records';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {
  id!: any;
  pet: Records= new Records();
  constructor(private route: ActivatedRoute,
    private router: Router, private petService: PetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['petId'];
    
    this.petService.getPetsById(this.id).subscribe(data=> {
      this.pet = data;
      console.log(this.pet);
    })
  }

  onSubmit() {
    this.petService.updatePet({
        id: this.id,
        age: this.pet.age,
        name: this.pet.name,
        weight: this.pet.weight,
        alergies: this.pet.alergies,
        breed: this.pet.breed,
        type: this.pet.type,
        owner: this.pet.owner

}).subscribe(data => {
    this.petsList();
    })
  }

  petsList() {
    this.router.navigate(['ownerspets', this.pet.owner ]);
    alert('Your update was successfull!');
  }


}
