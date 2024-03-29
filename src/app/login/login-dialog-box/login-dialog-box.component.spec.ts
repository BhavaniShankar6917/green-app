import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogBoxComponent } from './login-dialog-box.component';

describe('LoginDialogBoxComponent', () => {
  let component: LoginDialogBoxComponent;
  let fixture: ComponentFixture<LoginDialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginDialogBoxComponent]
    });
    fixture = TestBed.createComponent(LoginDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
