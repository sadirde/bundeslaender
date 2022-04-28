import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Bundesland/:bundesland', component: StateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
