import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanBooksGuard } from './guards/can-books.guard';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BooksResolver } from './resolvers/books.resolver';
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanBooksGuard],
    component: BooksTableComponent,
    resolve: { data: BooksResolver },
    children: [
      { path: 'chart', component: ChartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
