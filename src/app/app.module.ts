import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { TranscodeComponent } from './pages/transcode/transcode.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';
import { TranscodesListComponent } from './components/transcodes-list/transcodes-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TranscodesSearchComponent } from './components/transcodes-search/transcodes-search.component';
import { UploadTranscodificaComponent } from './components/upload-transcodifica/upload-transcodifica.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SuppliersComponent,
    TranscodeComponent,
    ProductSearchComponent,
    ProductListComponent,
    ProductDetailsComponent,
    SuppliersListComponent,
    SupplierDetailsComponent,
    TranscodesListComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    TranscodesSearchComponent,
    UploadTranscodificaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
