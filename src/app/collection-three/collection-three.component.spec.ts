import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionThreeComponent } from './collection-three.component';

describe('CollectionThreeComponent', () => {
  let component: CollectionThreeComponent;
  let fixture: ComponentFixture<CollectionThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionThreeComponent]
    });
    fixture = TestBed.createComponent(CollectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
