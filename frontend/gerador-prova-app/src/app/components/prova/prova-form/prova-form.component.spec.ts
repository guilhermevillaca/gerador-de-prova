import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaFormComponent } from './prova-form.component';

describe('ProvaFormComponent', () => {
  let component: ProvaFormComponent;
  let fixture: ComponentFixture<ProvaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
