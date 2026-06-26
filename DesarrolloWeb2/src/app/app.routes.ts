import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/Counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { AnimePageComponent } from './pages/anime/anime-page';
import { AnimeSuperComponent } from './pages/anime-super/anime-super-page';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent,
    },
    {
        path: 'anime',
        component: AnimePageComponent,
    },
      {
        path: 'anime-super',
        component: AnimeSuperComponent,
    }


];




