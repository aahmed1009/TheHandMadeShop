import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionTwoComponent } from './collection-two.component';

describe('CollectionTwoComponent', () => {
  let component: CollectionTwoComponent;
  let fixture: ComponentFixture<CollectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionTwoComponent]
    });
    fixture = TestBed.createComponent(CollectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
