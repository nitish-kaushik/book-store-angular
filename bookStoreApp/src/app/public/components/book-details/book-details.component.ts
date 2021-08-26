import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  public id: number = 0;
  public authorId: number = 0;
  public name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.authorId = param['authorId'];
    });

    this.route.queryParams.subscribe((queryParam) => {
      this.name = queryParam.name;
      console.log(queryParam);
    });
  }
}
