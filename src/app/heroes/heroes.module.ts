import { HeroeDetailPageComponent } from './pages/heroe-detail-page/heroe-detail-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes.routing';
import { HeroesService } from './heroes.service';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeroeEditorPageComponent } from './pages/heroe-editor-page/heroe-editor-page.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const PAGES = [
  HeroesPageComponent,
  HeroeDetailPageComponent,
  HeroeEditorPageComponent,
];

const COMPONENTS = [HeroesListComponent, HeroItemComponent, HeroFormComponent];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    ...MATERIAL_MODULES,
  ],
  declarations: [...PAGES, ...COMPONENTS],
  providers: [HeroesService],
})
export class HeroesModule {}
