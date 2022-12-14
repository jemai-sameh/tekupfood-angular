import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddresssComponent } from './Pages/Address/add-addresss/add-addresss.component';
import { ListAddressComponent } from './Pages/Address/list-address/list-address.component';
import { AddClientComponent } from './Pages/Client/add-client/add-client.component';
import { ListClientComponent } from './Pages/Client/list-client/list-client.component';
import { AddDeliveryManComponent } from './Pages/DeliveryMan/add-delivery-man/add-delivery-man.component';
import { ListDeliveryManComponent } from './Pages/DeliveryMan/list-delivery-man/list-delivery-man.component';
import { AddManagerComponent } from './Pages/Manager/add-manager/add-manager.component';
import { ListManagerComponent } from './Pages/Manager/list-manager/list-manager.component';
import { AddOrderComponent } from './Pages/Order/add-order/add-order.component';
import { ListOrderComponent } from './Pages/Order/list-order/list-order.component';
import { ListPayementComponent } from './Pages/Order/list-order/list-payement/list-payement.component';
import { AddPayementComponent } from './Pages/Payment/add-payement/add-payement.component';
import { AddPlatComponent } from './Pages/Plat/add-plat/add-plat.component';
import { ListPlatComponent } from './Pages/Plat/list-plat/list-plat.component';

const routes: Routes = [ 
{path:"addAddress",component:AddAddresssComponent},
{path:"addClient",component:AddClientComponent},
{path:"addManager",component:AddManagerComponent},
{path:"addOrder",component:AddOrderComponent},
{path:"addPlat",component:AddPlatComponent},
{path:"addPayement",component:AddPayementComponent},
{path:"addDeliveryMan",component:AddDeliveryManComponent},
{path:"listAddress",component:ListAddressComponent},
{path:"listClient",component:ListClientComponent},
{path:"listManager",component:ListManagerComponent},
{path:"listOrder",component:ListOrderComponent},
{path:"listPlat",component:ListPlatComponent},
{path:"listPayement",component:ListPayementComponent},
{path:"listDeliveryMan",component:ListDeliveryManComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
