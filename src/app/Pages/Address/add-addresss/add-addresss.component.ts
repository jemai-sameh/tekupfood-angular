import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/Model/address';
import { AddressService } from 'src/app/Service/address.service';

@Component({
  selector: 'app-add-addresss',
  templateUrl: './add-addresss.component.html',
  styleUrls: ['./add-addresss.component.css']
})
export class AddAddresssComponent implements OnInit {

  submitted = false;
  entity:Address= new Address();
  idEntity:any;

  constructor(private service : AddressService, private router : Router, private route: ActivatedRoute) {}
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
            console.log(res);
            this.submitted = true;
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["listAddress"])
    }

}
