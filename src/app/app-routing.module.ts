import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { TranscodeComponent } from './pages/transcode/transcode.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

export enum AppRoutes {
  HOME = 'home',
  LOGIN = 'login',
  SEARCH = 'cerca',
  SUPPLIERS = 'suppliers',
  TRANSCODE = 'trans_codifiche',
  PAGE_NOT_FOUND = 'page_not_found',
  // ... other routes ...
}

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: AppRoutes.HOME, component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: AppRoutes.SEARCH, pathMatch: 'full' },
      { path: AppRoutes.SEARCH, component: SearchComponent },
      { path: AppRoutes.SUPPLIERS, component: SuppliersComponent },
      { path: AppRoutes.TRANSCODE, component: TranscodeComponent },
    ]
  },
  { path: AppRoutes.LOGIN, component: LoginComponent },
  { path: AppRoutes.PAGE_NOT_FOUND, component: PageNotFoundComponent },
  { path: '**', redirectTo: AppRoutes.PAGE_NOT_FOUND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
