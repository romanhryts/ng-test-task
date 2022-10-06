import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IBook } from '../../../../models/IBook';


@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {
  public books!: IBook[];
  public filterBy: string = '';
  public filterWord: string = '';

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(take(1))
      .subscribe({
        next: ({data}) => this.books = data,
        error: (err) => console.log(err)
      });
  }

  updateFilter(value: string): void {
    this.filterBy = value;
  }

  updateWord(value: string): void {
    this.filterWord = value;
  }

  sortByDate(value: string): void {
    if (value === 'dateASC') {
      this.books = this.books.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
    } else {
      this.books = this.books.sort((a, b) => +new Date(a.publishDate) - +new Date(b.publishDate));
    }
  }

  sortByPages(value: string): void {
    if (value === 'pagesASC') {
      this.books = this.books.sort((a, b) => b.pageCount - a.pageCount);
    } else {
      this.books = this.books.sort((a, b) => a.pageCount - b.pageCount);
    }
  }

}
