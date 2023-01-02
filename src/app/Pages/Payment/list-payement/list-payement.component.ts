import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payement } from 'src/app/Model/payement';
import { PayementService } from 'src/app/Service/payement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-payement',
  templateUrl: './list-payement.component.html',
  styleUrls: ['./list-payement.component.css']
})
export class ListPayementComponent implements OnInit {

  list : Payement[]=[];
  entity: Payement =new Payement();
  constructor(private service: PayementService , private route: ActivatedRoute,
    private router: Router) {
   }
 
 
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.service.findAll()
    .subscribe(res=>{this.list=res 
 
    },error=>{
      console.error(error)
 
    },()=>{
 
    });
 
  }
  add(){
    this.router.navigate(['addPayement']);
 
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
    this.router.navigate(['addPayement'],{queryParams:{_id:id}});
 
  }
    details(id: number){
    this.router.navigate(['detailsPayement', id]);
 
  }
}
