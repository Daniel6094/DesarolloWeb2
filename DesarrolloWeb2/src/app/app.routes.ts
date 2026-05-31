import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/Counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent,
    }


];




