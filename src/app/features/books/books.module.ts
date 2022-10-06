import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FormsModule } from '@angular/forms';
import { FilterBooksPipe } from './pipes/filter-books.pipe';


@NgModule({
  declarations: [
    BooksTableComponent,
    SortingComponent,
    FilterBooksPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule {
}
