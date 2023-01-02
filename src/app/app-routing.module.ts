import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddAddresssComponent } from './Pages/Address/add-addresss/add-addresss.component';
import { ListAddressComponent } from './Pages/Address/list-address/list-address.component';
import { AddClientComponent } from './Pages/Client/add-client/add-client.component';
import { ListClientComponent } from './Pages/Client/list-client/list-client.component';
import { AddDeliveryManComponent } from './Pages/DeliveryMan/add-delivery-man/add-delivery-man.component';
import { ListDeliveryManComponent } from './Pages/DeliveryMan/list-delivery-man/list-delivery-man.component';
import { LoginComponent } from './Pages/login/login.component';
import { AddManagerComponent } from './Pages/Manager/add-manager/add-manager.component';
import { ListManagerComponent } from './Pages/Manager/list-manager/list-manager.component';
import { AddOrderComponent } from './Pages/Order/add-order/add-order.component';
import { ListOrderComponent } from './Pages/Order/list-order/list-order.component';
import { AddPayementComponent } from './Pages/Payment/add-payement/add-payement.component';
import { ListPayementComponent } from './Pages/Payment/list-payement/list-payement.component';
import { AddPlatComponent } from './Pages/Plat/add-plat/add-plat.component';
import { ListPlatComponent } from './Pages/Plat/list-plat/list-plat.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AuthGuardService } from './Service/guard/auth-guard.service';

const routes: Routes = [ 
  {path:"addAddress",component:AddAddresssComponent,canActivate : [AuthGuardService]},
  {path:"addClient",component:AddClientComponent,canActivate : [AuthGuardService]},
  {path:"addManager",component:AddManagerComponent,canActivate : [AuthGuardService]},
  {path:"addOrder",component:AddOrderComponent,canActivate : [AuthGuardService]},
  {path:"addPlat",component:AddPlatComponent,canActivate : [AuthGuardService]},
  {path:"addPayement",component:AddPayementComponent,canActivate : [AuthGuardService]},
  {path:"addDeliveryMan",component:AddDeliveryManComponent,canActivate : [AuthGuardService]},
  {path:"listAddress",component:ListAddressComponent,canActivate : [AuthGuardService]},
  {path:"listClient",component:ListClientComponent,canActivate : [AuthGuardService]},
  {path:"listManager",component:ListManagerComponent,canActivate : [AuthGuardService]},
  {path:"listOrder",component:ListOrderComponent,canActivate : [AuthGuardService]},
  {path:"listPlat",component:ListPlatComponent,canActivate : [AuthGuardService]},
  {path:"listPayment",component:ListPayementComponent,canActivate : [AuthGuardService]},
  {path:"listDeliveryMan",component:ListDeliveryManComponent,canActivate : [AuthGuardService]},
  {path :"login",component:LoginComponent },
  {path :"register",component:RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate : [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent ,canActivate : [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
