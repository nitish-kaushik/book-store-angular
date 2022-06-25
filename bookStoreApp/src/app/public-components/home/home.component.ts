import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('authors') private childAuthor: AuthorsComponent;
  @ViewChild('decButton') private decButton: MatButton;
  @ViewChild('title') private title: ElementRef;

  constructor(public _counterService: CounterService,
    @Inject('appTitle') public config: any
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childAuthor.setData(10);
      this.decButton.color = 'primary'
      this.decButton.disabled = true;
      this.title.nativeElement.innerHTML = 'This is updated title';
      console.log(this.title);
    }, 0);
  }

  public increase(): void {
    this._counterService.incCounter();
  }

  public decrease(): void {
    this._counterService.decCounter();
  }
}
