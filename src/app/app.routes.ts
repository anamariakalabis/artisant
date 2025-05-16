
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans', component: ArtisanListComponent },
  { path: 'artisan/:id', component: ArtisanProfileComponent },
  { path: '**', component: NotFoundComponent }  // Catch-all for 404
];


