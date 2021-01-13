import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGFComponent } from './auth-gf.component';

describe('AuthGFComponent', () => {
  let component: AuthGFComponent;
  let fixture: ComponentFixture<AuthGFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
