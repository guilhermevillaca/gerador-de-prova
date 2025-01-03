import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvaQuestaoComponent } from './provaquestao.component';

describe('ProvaQuestaoComponent', () => {
  let component: ProvaQuestaoComponent;
  let fixture: ComponentFixture<ProvaQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvaQuestaoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
