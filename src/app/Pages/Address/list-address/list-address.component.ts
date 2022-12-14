import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/Model/address';
import { AddressService } from 'src/app/Service/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

 
  list : Address[]=[];
  entity: Address =new Address();
  constructor(private service: AddressService , private route: ActivatedRoute,
    private router: Router) {
 
 
   }
 
 
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.service.findAll()
    .subscribe({
      next: (data) => {
        this.list = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
 
    
   }
 /* reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.service.findAll()
    .subscribe(res=>{this.list=res 
 
    },error=>{
      console.error(error)
 
    },()=>{
 
    });
 
  }*/
  add(){
    this.router.navigate(['addAddress']);
 
  }
  delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
       // alert(id);
        this.service.deleteById(id)
        .subscribe(res=>{
          this.reloadData();
        })
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
 
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe 🙂',
        'error'
      )
      }
    })
  }
 
  update(id:any){
    //alert(id);
    this.router.navigate(['addAddress'],{queryParams:{_id:id}});
 
  }
  updateentity(entity:any){
    //alert(id);
    this.router.navigate(['addAddress']);
    localStorage.setItem("address",entity);

  }
  
  details(id: number){
    this.router.navigate(['detailsAddress', id]);
  }
}
