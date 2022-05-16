import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviousExaminationsService } from '../previous-examinations.service';
import { PreviousExaminations } from '../previousexaminations';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.css']
})
export class AddExaminationComponent implements OnInit {
  
  id:any;
  examination: PreviousExaminations = new PreviousExaminations();

  constructor(private examinationService: PreviousExaminationsService, private router:Router,private _ativatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._ativatedRoute.snapshot.params['id'];

  }



  saveExamination() {
    this.examinationService.addExamination({
          id: this.examination.id,
          dateOfExamination: this.examination.dateOfExamination,
          diagnosis: this.examination.diagnosis,
          treatment: this.examination.treatment,
          type: this.examination.type,
          currency: 'RSD',
          leftToPay: 0,
          payed: this.examination.payed,
          sum: this.examination.sum,
          pay_date: new Date(),
          saldo: 0,
          pet: this.id

}).subscribe(data => {
      console.log(data);
      this.backToExaminationsList();
    }),
      ( error: any) => alert(error);
  }

  backToExaminationsList() {
    this.router.navigate(['records/', this.id]);
  }

  onSubmit() {
    alert("New examination has been added!")
    this.saveExamination();
  }

}
