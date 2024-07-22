import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute,private service:EmployeeService){}

  ngOnInit(): void {
    
    let param = this.route.snapshot.paramMap.get("id");

    this.getEmployeeData(param)

  }

  moreDetail:any;

  getEmployeeData(param:any){

    this.service.getApiById(param).subscribe((result)=>{


      this.moreDetail = result.data

      console.log(this.moreDetail);
      

    })

  }

}
