import { Injectable } from '@angular/core';
import { Student } from './student.model';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  formData:Student= new Student();
  readonly baseURL ='http://localhost:7264/api/students'
  formData : Student =new Student();
  list :Student[];

  postStudent(){
   return this.http.post(this.baseURL,this.formData);
  }
  putStudent(){
    return this.http.put('${this.baseURL}/${this.formData.studentId}',this.formData);
  }
  refresList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Student[]);
  }
  deletestudent(id:number){
    return this.http.put('${this.baseURL}/${id}',this.formData);
  }
}
