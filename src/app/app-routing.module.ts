import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path : '', redirectTo: 'pokemons', pathMatch: 'full'
  },
  { //attention interception doit-être en fin de routing
    path : '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
