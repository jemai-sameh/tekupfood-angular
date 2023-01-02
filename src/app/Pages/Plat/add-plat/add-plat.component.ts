import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Manager } from 'src/app/Model/manager';
import { Plat } from 'src/app/Model/plat';
import { ManagerService } from 'src/app/Service/manager.service';
import { PlatService } from 'src/app/Service/plat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  submitted = false;
  entity:Plat= new Plat();
  managers:Manager[]=[];
  manager:Manager=new Manager();
  selectedFiles!: FileList;
  currentFileUpload!: any;
  imgPlat!:String;
  idEntity:any;
  constructor(private service : PlatService,private seviceManager:ManagerService, private router : Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.seviceManager.findAll().subscribe(
      response => {
        response.forEach(element => {
          this.managers.push(element);
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
    
      this.manager.id=Number(this.entity.manager);
      this.entity.manager=this.manager;
      


      this.service.save(this.entity)
        .subscribe({
          next: (res) => {
            this.currentFileUpload = this.selectedFiles.item(0);
            this.service.uploadPlatImage(res.id,this.currentFileUpload).subscribe(
              res=>{

              },
              error=>{

              },
              ()=>{
                this.submitted = true;
            
                Swal.fire('plat was submitted successfully!')
    
                this.router.navigate(["listPlat"])
              }

            )
            
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["listPlat"])
    }


    changeImagePlat(event:any){

      
      this.selectedFiles = event.target.files;
      this.currentFileUpload = this.selectedFiles.item(0);



    }
    selectImagePlat(event:any){
      this.selectedFiles = event.target.files;
      this.currentFileUpload = this.selectedFiles.item(0);
    }
}
