import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from 'src/app/Model/manager';
import { ManagerService } from 'src/app/Service/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  submitted = false;
  entity:Manager= new Manager();
  idEntity:any;
  constructor(private service : ManagerService, private router : Router, private route: ActivatedRoute) {}
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
            Swal.fire('Manager was submitted successfully!')

            this.router.navigate(["listManager"])

          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["listManager"])
    }
}
