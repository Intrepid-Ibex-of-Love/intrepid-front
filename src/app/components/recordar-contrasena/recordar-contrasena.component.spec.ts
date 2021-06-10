import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarContrasenaComponent } from './recordar-contrasena.component';

describe('RecordarContrasenaComponent', () => {
  let component: RecordarContrasenaComponent;
  let fixture: ComponentFixture<RecordarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordarContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
