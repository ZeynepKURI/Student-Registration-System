import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/shared/student.model';



@Component({
  selector: 'app- student-form',
  templateUrl: './student-form.component.html',
  styles: [
  ]
})
export class StudentFormComponent implements OnInit {

  constructor(public service:Student) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.StudentId==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  
    this.service.postStudent().subscribe(
  res =>{
  this.resetForm(form);
  this.toastr.success('Submitted successfully','student register'
    )},
  
  
  err =>{console.log(err);}
    );
  }
  
  insertRecord(form:NgForm)
  {this.service.poststudent().subscribe(
  
    res =>{
    this.resetForm(form);
    this.toastr.success('Submitted successfully','student register'
      )},
    
    
    err =>{console.log(err);}
      );
    }
  updateRecord(form:NgForm){
    {this.service.putstudent().subscribe(
  
      res =>{
      this.resetForm(form);
      this.toastr.info('Update successfully','student register'
        )},
      
      
      err =>{console.log(err);}
        );
      }
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData =new Student();
  }
  populateForm(selectedRecord:Student){
    this.service.formData = Object.assign({},selectedRecord);
  }
  onDelete(id:number){
    if (confirm('')){
    this.service.deletestudent(id)
    .subscribe(
      res=>{
        this.service.refresList();
        this.toastr.error("deleted successfully",'studeny register');
      },
      err =>{console.log(err)}
    )
    }
  }

}
