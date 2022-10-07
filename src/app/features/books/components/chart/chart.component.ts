import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../../../../models/IBook';

interface IChartData {
  x: string;
  y: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public title: ApexTitleSubtitle = { text: 'Books by publishing date' };
  public chart: ApexChart = { type: 'bar', width: 1300 };
  public series!: ApexAxisChartSeries;
  public books!: IBook[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const { state: { data } } = history;
      this.books = data as IBook[];
      this.initializeChartSeries();
    })
  }

  private initializeChartSeries(): void {
    const data: IChartData[] = [];
    this.books.forEach((book: IBook) => {
      // try to find book in array with the same date of publishing
      const idx: number = data.findIndex((el: IChartData) => new Date(el.x) === new Date(book.publishDate));
      if (idx !== -1) {
        data[idx].x += 1;
        return;
      }
      data.push({x: new Date(book.publishDate).toDateString(), y: 1});
    });
    this.series = [
      {
        data
      }
    ];
  }

}
