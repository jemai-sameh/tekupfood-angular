import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/Model/address';
import { Client } from 'src/app/Model/client';
import { Commande } from 'src/app/Model/commande';
import { LabelValue } from 'src/app/Model/labelValue';
import { Manager } from 'src/app/Model/manager';
import { Plat } from 'src/app/Model/plat';
import { AddressService } from 'src/app/Service/address.service';
import { ClientService } from 'src/app/Service/client.service';
import { ManagerService } from 'src/app/Service/manager.service';
import {  OrderService } from 'src/app/Service/order.service';
import { PlatService } from 'src/app/Service/plat.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  submitted = false;
  idEntity:any;
  labelValue:LabelValue []=[];

  entity:Commande= new Commande();
  manager:Manager=new Manager();
  address:Address=new Address();
  client:Client=new Client();

  addresses: Address[] = [];
  clients: Client[] = [];
  managers:Manager[]=[];
  plat : Plat[]=[];



  constructor(private service : OrderService,private serviceClient: ClientService,private servicePlat:PlatService,private seviceManager:ManagerService,private serviceAddress: AddressService, private router : Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.entity.plat.id==-1;
    this.findAllAddress();
    this.findAllClient();    
    this.findAllManager()
    this.checkUpdate();
    let l=new LabelValue();
    l.label="test";
    l.value=1
    this.labelValue = [ l
    ];
    
  }
  findAllAddress(): void{
    this.serviceAddress.findAll().subscribe(
      response => {
        response.forEach(element => {
          this.addresses.push(element);
        });
      }
    );
  }
  findAllClient(): void{
    this.serviceClient.findAll().subscribe(
      response => {
        response.forEach(element => {
          this.clients.push(element);
        });
      }
    );

  }
  findAllManager(): void{
    this.seviceManager.findAll().subscribe(
      response => {
        response.forEach(element => {
          this.managers.push(element);
        });
      }
    );
  }
  findAllPlat(): void{
  this.servicePlat.findAllDto().subscribe(res=>{this.labelValue=res 
  },error=>{
        console.error(error)
        
      },()=>{
  
      });
}
checkUpdate():void{
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
    if (this.entity.plat.id!=-1 && !this.submitted)
    {
      this.manager.id=Number(this.entity.manager);
      this.entity.manager=this.manager;

      this.client.id=Number(this.entity.client);
      this.entity.client=this.client;

      this.address.id=Number(this.entity.address);
      this.entity.address=this.address;

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
      this.router.navigate(["listOrder"])
    }
}
