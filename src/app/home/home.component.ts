import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private service:EmployeeService){}
  
  userObj:any;
  allEmployees:any[]=[];
  
  
  ngOnInit(): void {
    
    this.service.getApi().subscribe((response)=>{

      this.allEmployees = response.data

      console.log(this.allEmployees);
      

    })
    
  
  }
  
  
  employeeFormData= new FormGroup({
    
    "name":new FormControl(null),
    "age":new FormControl(null),
    "salary":new FormControl(null)
    
  })
  
  submitForm(){
    
    this.service.postApi(this.employeeFormData.value).subscribe((result)=>{
      
      this.userObj = result.data
      
    })
    
  }
delete(id:any){
this.service.deleteApi(id).subscribe((response)=>{
console.log(response);

})
}


}
