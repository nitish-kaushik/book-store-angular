import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-address',
  templateUrl: './authors-address.component.html',
  styleUrls: ['./authors-address.component.scss']
})
export class AuthorsAddressComponent implements OnInit {

  @Input() address: string;

  constructor() { }

  ngOnInit(): void {
  }

}
