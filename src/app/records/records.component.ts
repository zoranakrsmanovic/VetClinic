import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviousExaminationsService } from '../previous-examinations.service';
import { PreviousExaminations } from '../previousexaminations';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  id!:string;
  examination:any;
  page: number = 1;
  total: number = 50;
  loading: boolean = false;
  panelOpenState = false;
  empty = false;

  public config: PaginationInstance = {
    id: 'server',
    itemsPerPage: 3,
    currentPage: this.page,
    totalItems: this.total
  };



  constructor(private _ativatedRoute: ActivatedRoute,
    public route: Router, private examinationService: PreviousExaminationsService,private router: Router) { }

  ngOnInit(): void {
   this.getPetsRecords(1);
  }

  getPetsRecords(page: any){
    this.page = page;
    this.loading = true;
    this.id = this._ativatedRoute.snapshot.params['petId'];
    this.examination = new PreviousExaminations();
    this.examinationService.getExaminationsByPetId(this.id).subscribe(
      data => {
        this.examination = data;
        this.config.currentPage = page;
        this.total = this.examination.length ;
        this.loading = false;
        console.log(this.examination); 
        
        if(this.examination.length === 0){
          this.empty = true;
          console.log("empty")
        }else{
          this.empty = false;
          console.log("not empty")
        }

        
      }
    )
  }

  passPetId() {
    this.router.navigate(['addexamination', this.id]);
    console.log(this.id);
  }

 

}
