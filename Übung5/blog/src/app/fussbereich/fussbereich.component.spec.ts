import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FussbereichComponent } from './fussbereich.component';

describe('FussbereichComponent', () => {
  let component: FussbereichComponent;
  let fixture: ComponentFixture<FussbereichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FussbereichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FussbereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
