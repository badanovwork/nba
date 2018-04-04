import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconRegistry, MatIconModule, MatDialogModule} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { NavComponent } from './layout/nav/nav.component';
import { CoreModule } from './core/core.module';
import { TeamsComponent } from './layout/teams/teams.component';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PlayersComponent } from './layout/players/players.component';
import {ToggleService} from './core/toggle.service';
import {HttpService} from './core/http.service';
import { FavoritesComponent } from './layout/favorites/favorites.component';
import { LayoutComponent } from './layout/layout.component';
import {LocalStorageService} from './core/local-storage.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DialogDataExampleDialogComponent} from './layout/dialog-data-example-dialog/dialog-data-example-dialog.component';

const appRoutes: Routes =[
  { path: '', component: LayoutComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent,
    TeamsComponent,
    PlayersComponent,
    FavoritesComponent,
    DialogDataExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToggleService, HttpService, LocalStorageService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialogComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
