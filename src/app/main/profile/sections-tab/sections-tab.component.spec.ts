import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsTabComponent } from './sections-tab.component';

describe('SectionsTabComponent', () => {
  let component: SectionsTabComponent;
  let fixture: ComponentFixture<SectionsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionsTabComponent]
    });
    fixture = TestBed.createComponent(SectionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
