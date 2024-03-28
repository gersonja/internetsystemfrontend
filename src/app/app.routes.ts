import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientoptionsComponent } from './pages/clientoptions/clientoptions.component';
import { ClientComponent } from './pages/client/client.component';
import { TurnComponent } from './pages/turn/turn.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { RegisterContractComponent } from './pages/register-contract/register-contract.component';
import { RegisterUserComponent } from './pages/manager/register-user/register-user.component';
import { RegisterCashComponent } from './pages/manager/register-cash/register-cash.component';
import { ManagerComponent } from './pages/manager/manager.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'clientoptions/:id',
    component: ClientoptionsComponent
  },
  {
    path: 'turn/:attentionType/:clientId',
    component: TurnComponent
  },
  {
    path: 'registerclient',
    component: RegisterClientComponent
  },
  {
    path: 'registercontract',
    component: RegisterContractComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'registrocajero',
    component: RegisterUserComponent
  },
  {
    path: 'registrarcaja',
    component: RegisterCashComponent
  }
];
