import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTileComponent } from './state-tile.component';

describe('StateTileComponent', () => {
  let component: StateTileComponent;
  let fixture: ComponentFixture<StateTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
