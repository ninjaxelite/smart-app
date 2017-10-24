import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BahnhofComponent } from './bahnhof.component';

describe('HomeComponent', () => {
  let component: BahnhofComponent;
  let fixture: ComponentFixture<BahnhofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BahnhofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BahnhofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
