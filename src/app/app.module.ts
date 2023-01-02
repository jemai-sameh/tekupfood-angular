import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListAddressComponent } from './Pages/Address/list-address/list-address.component';
import { AddAddresssComponent } from './Pages/Address/add-addresss/add-addresss.component';
import { AddClientComponent } from './Pages/Client/add-client/add-client.component';
import { ListClientComponent } from './Pages/Client/list-client/list-client.component';
import { AddManagerComponent } from './Pages/Manager/add-manager/add-manager.component';
import { ListManagerComponent } from './Pages/Manager/list-manager/list-manager.component';
import { AddOrderComponent } from './Pages/Order/add-order/add-order.component';
import { ListOrderComponent } from './Pages/Order/list-order/list-order.component';
import { AddDeliveryManComponent } from './Pages/DeliveryMan/add-delivery-man/add-delivery-man.component';
import { ListDeliveryManComponent } from './Pages/DeliveryMan/list-delivery-man/list-delivery-man.component';
//import { ListPayementComponent } from './Pages/Order/list-order/list-payement/list-payement.component';
import { AddPayementComponent } from './Pages/Payment/add-payement/add-payement.component';
import { AddPlatComponent } from './Pages/Plat/add-plat/add-plat.component';
import { ListPlatComponent } from './Pages/Plat/list-plat/list-plat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MultiSelectModule} from 'primeng/multiselect';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthIntercepterServiceService } from './Service/intercepter/auth-intercepter-service.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


import { ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPayementComponent } from './Pages/Payment/list-payement/list-payement.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAddressComponent,
    AddAddresssComponent,
    AddClientComponent,
    ListClientComponent,
    AddManagerComponent,
    ListManagerComponent,
    AddOrderComponent,
    ListOrderComponent,
    AddDeliveryManComponent,
    ListDeliveryManComponent,
    ListPayementComponent,
    AddPayementComponent,
    AddPlatComponent,
    ListPlatComponent,
    RegisterComponent,
    LoginComponent,
    
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

    
    MatNativeDateModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{provide :HTTP_INTERCEPTORS, useClass:AuthIntercepterServiceService,multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
