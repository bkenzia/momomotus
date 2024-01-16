import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {ClavierComponent} from "./components/clavier/clavier.component";
import {PlayerComponent} from "./components/player/player.component";


export  const routes: Routes = [
  { path: 'clavier', component: ClavierComponent},
  { path: '', component: PlayerComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
