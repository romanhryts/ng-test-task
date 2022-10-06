import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public readonly title: string = 'Simporter Angular Task';

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/books']).catch(error => console.log(error));
  }
}
