import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    HttpClient,
  ],
  declarations: [
  ],
})
export class CoreModule {}
