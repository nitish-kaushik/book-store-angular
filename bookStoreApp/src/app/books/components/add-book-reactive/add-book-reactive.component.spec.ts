import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookReactiveComponent } from './add-book-reactive.component';

describe('AddBookReactiveComponent', () => {
  let component: AddBookReactiveComponent;
  let fixture: ComponentFixture<AddBookReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
