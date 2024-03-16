import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTabComponent } from './icons-tab.component';

describe('IconsTabComponent', () => {
  let component: IconsTabComponent;
  let fixture: ComponentFixture<IconsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconsTabComponent]
    });
    fixture = TestBed.createComponent(IconsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
