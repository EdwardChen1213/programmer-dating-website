import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchingComponent } from './quick-searching.component';

describe('QuickSearchingComponent', () => {
  let component: QuickSearchingComponent;
  let fixture: ComponentFixture<QuickSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
