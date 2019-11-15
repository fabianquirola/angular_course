import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdminBookComponent } from './item-admin-book.component';

describe('ItemAdminBookComponent', () => {
  let component: ItemAdminBookComponent;
  let fixture: ComponentFixture<ItemAdminBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAdminBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAdminBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
