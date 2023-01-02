import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryMan } from 'src/app/Model/delivery-man';
import { DeliveryManService } from 'src/app/Service/delivery-man.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-delivery-man',
  templateUrl: './add-delivery-man.component.html',
  styleUrls: ['./add-delivery-man.component.css']
})
export class AddDeliveryManComponent implements OnInit {

  submitted = false;
  entity:DeliveryMan= new DeliveryMan();
  idEntity:any;
  constructor(private service : DeliveryManService, private router : Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.idEntity=this.route.snapshot.queryParamMap.get('_id');
    if (this.idEntity!=null){
      this.service.findById(this.idEntity).subscribe(res=>{this.entity=res 
 
      },error=>{
        console.error(error)
   
      },()=>{
   
      });
    }
  }
  add(): void {
    if (!this.submitted)
 
    {
      this.service.save(this.entity)
        .subscribe({
          next: (res) => {
           // console.log(res);
            this.submitted = true;
            
            Swal.fire('Delivery Man was submitted successfully!')

            this.router.navigate(["listDeliveryMan"])
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["listDeliveryMan"])
    }

}
