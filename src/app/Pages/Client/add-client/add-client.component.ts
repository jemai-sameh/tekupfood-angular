import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  submitted = false;
  entity:Client= new Client();
  idEntity:any;
  constructor(private service : ClientService, private router : Router, private route: ActivatedRoute) {}
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
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["listClient"])
    }
}
 