import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { HeroeDetailPageComponent } from './pages/heroe-detail-page/heroe-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesPageComponent,
  },
  {
    path: ':id',
    component: HeroeDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
