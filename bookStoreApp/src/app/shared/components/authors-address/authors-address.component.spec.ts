import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAddressComponent } from './authors-address.component';

describe('AuthorsAddressComponent', () => {
  let component: AuthorsAddressComponent;
  let fixture: ComponentFixture<AuthorsAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsAddressComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
