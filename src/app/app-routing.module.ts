import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarViewComponent} from "./components/car-view/car-view.component";
import {RentComponent} from "./components/rent/rent.component";
import {RepairComponent} from "./components/repair/repair.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: 'car-view', component: CarViewComponent, canActivate: [AuthGuard]},
  {path: 'rent', component: RentComponent, canActivate: [AuthGuard]},
  {path: 'repair', component: RepairComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
