import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class TestService {

  constructor() { }

  public myData: string;

  public status: boolean = false;
}
