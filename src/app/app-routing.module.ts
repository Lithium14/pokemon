import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';


const routes: Routes = [
  {path: '', component: PokedexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
