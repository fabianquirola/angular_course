import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilNavComponent } from './util-nav.component';

describe('UtilNavComponent', () => {
  let component: UtilNavComponent;
  let fixture: ComponentFixture<UtilNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
