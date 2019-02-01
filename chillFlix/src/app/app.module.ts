import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MovieListContentComponent} from './movie-list-content/movie-list-content.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AuthGuardService } from './auth/auth-guard/auth-guard.service';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { JwtInterceptorService } from './auth/interceptor/jwt-interceptor.service';
import { MovieNGRXModel } from './ngrxModel/movie.model';
import {MovieReducer } from './ngrxReducer/ngrxMovie.reducer';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './ngrxEffects/movie.effects';

export function tokenGetter() {
  return '1425sd251x2zx12';
  // return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    MovieListContentComponent,
    MovieDetailComponent,
    AddMovieComponent,
    EditMovieComponent,
    NavigationBarComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'Authorization'}
    }),
    StoreModule.forRoot({
      video: MovieReducer
      }),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [AuthGuardService, JwtHelperService, {
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
