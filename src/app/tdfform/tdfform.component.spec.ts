import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfformComponent } from './tdfform.component';

describe('TdfformComponent', () => {
  let component: TdfformComponent;
  let fixture: ComponentFixture<TdfformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdfformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
