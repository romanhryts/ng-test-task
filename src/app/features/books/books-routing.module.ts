import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanBooksGuard } from './guards/can-books.guard';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BooksResolver } from './resolvers/books.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanBooksGuard],
    component: BooksTableComponent,
    resolve: { data: BooksResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
