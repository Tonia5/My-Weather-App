import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
 { path: 'weather', component: CardComponent },
 { path: '404', component: ErrorPageComponent },
 { path: '', redirectTo: 'weather' ,pathMatch: 'full'},
 { path: '**',redirectTo: '404' ,pathMatch: 'full' },
];
