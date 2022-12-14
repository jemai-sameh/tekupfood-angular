import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/Model/commande';
import { Payement } from 'src/app/Model/payement';
import { OrderService } from 'src/app/Service/order.service';
import { PayementService } from 'src/app/Service/payement.service';

@Component({
  selector: 'app-add-payement',
  templateUrl: './add-payement.component.html',
  styleUrls: ['./add-payement.component.css']
})
export class AddPayementComponent implements OnInit {

  submitted = false;
  entity:Payement= new Payement();
  orders:Commande[]=[];
  idEntity:any;
  constructor(private service : PayementService,private serviceOrder: OrderService, private router : Router, private route: ActivatedRoute) {}
  ngOnInit(): void {

    this.serviceOrder.findAll().subscribe(
      response => {
        response.forEach(element => {
          this.orders.push(element);
        });
      }
    );
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
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["listPayement"])
    }
}
