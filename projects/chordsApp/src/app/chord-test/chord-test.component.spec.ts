import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordTestComponent } from './chord-test.component';

describe('ChordTestComponent', () => {
  let component: ChordTestComponent;
  let fixture: ComponentFixture<ChordTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
