import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BancoQuestoesComponent } from './bancoquestoes.component';

describe('BancoQuestoesComponent', () => {
  let component: BancoQuestoesComponent;
  let fixture: ComponentFixture<BancoQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BancoQuestoesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
