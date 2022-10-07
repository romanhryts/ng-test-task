import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FormsModule } from '@angular/forms';
import { FilterBooksPipe } from './pipes/filter-books.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    BooksTableComponent,
    SortingComponent,
    FilterBooksPipe,
    ChartComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    NgApexchartsModule
  ]
})
export class BooksModule {
}
