import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  Employees : any[];
  constructor() {
  this.Employees = [
    {empId : 1001, empName: 'Astha', empSal: 90000, empDep: 'JAVA', empjoiningdate: '6/12/2014'},
    {empId : 1002, empName: 'Rahul', empSal: 10000, empDep: 'Angular', empjoiningdate: '6/12/2014'}
   ];
}
}
