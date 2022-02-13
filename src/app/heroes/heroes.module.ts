import { HeroeDetailPageComponent } from './pages/heroe-detail-page/heroe-detail-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes.routing';
import { HeroesService } from './heroes.service';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';

@NgModule({
  imports: [CommonModule, SharedModule, HeroesRoutingModule],
  declarations: [
    HeroesPageComponent,
    HeroeDetailPageComponent,
    HeroesListComponent,
    HeroItemComponent,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
