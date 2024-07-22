import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: EmployeeService) { }
  up: any;
  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.service.getId(id).subscribe((response) => {
      this.up = response.data;
    })
  }

  update(){
    this.service.updateApi(this.up,this.up.id).subscribe((response)=>{

    })
  }









}






