import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolayoutComponent } from './nolayout.component';

describe('NolayoutComponent', () => {
  let component: NolayoutComponent;
  let fixture: ComponentFixture<NolayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NolayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NolayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
