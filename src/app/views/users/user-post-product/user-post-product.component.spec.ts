import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostProductComponent } from './user-post-product.component';

describe('UserPostProductComponent', () => {
  let component: UserPostProductComponent;
  let fixture: ComponentFixture<UserPostProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
