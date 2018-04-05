import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { LoaderComponent} from './loader/loader.component';
import { MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import { LoaderService} from './loader/loader.service';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
    LoaderService
  ]
})
export class CoreModule { }
