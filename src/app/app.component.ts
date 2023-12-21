import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'ob1';
  posts$: Observable<any[]> = of([]);
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts();
  }
}
