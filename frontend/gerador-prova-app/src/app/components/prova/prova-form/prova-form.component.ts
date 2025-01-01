import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../../BaseComponent.generic';
import { Prova } from '../../../model/prova.model';
import { ProvaService } from '../../../service/prova.service';
import { ProfessorService } from '../../../service/professor.service';
import { DisciplinaService } from '../../../service/disciplina.service';
import { lastValueFrom } from 'rxjs';
import { DateUtilsService } from '../../../service/date-utils.service';

@Component({
  selector: 'app-prova-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule,
    NgIf
  ],
  templateUrl: './prova-form.component.html',
  styleUrl: './prova-form.component.css'
})
export class ProvaFormComponent extends BaseComponent<Prova>{

  protected override entityRoute: string = '/prova';
  form: FormGroup;
  professores$: any;
  disciplina$: any;


 constructor(service: ProvaService, router: Router, private professorService: ProfessorService, private disciplinaService: DisciplinaService,
  private dateService: DateUtilsService
 ){
  super(service, router);
   this.form = new FormGroup({
     id: new FormControl(''),
     data: new FormControl(''),
     professor: new FormControl(''),
     disciplina: new FormControl(''),
     turno: new FormControl(''),
     periodoLetivo: new FormControl(''),
     formato: new FormControl(''),
     observacoes: new FormControl('')
    });
    this.id = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`
    if (this.id) {
      // Carrega os dados do item e atualiza o formulário
      this.loadItemById(this.id).then(() => this.updateForm());
    }
    this.getProfessores();
    this.getDisciplinas();
  }

  private updateForm(): void {
      if (this.item) {
        this.form.patchValue({
          id: this.item.id,
          data: this.dateService.toBrFormat(this.item.data),
          professor: this.item.professor?.id,
          disciplina: this.item.disciplina?.id,
          turno: this.item.turno,
          periodoLetivo: this.item.periodoLetivo,
          formato: this.item.formato,
          observacoes: this.item.observacoes
        });
      }
    }
  
    public salvar(){
      const data = this.form.value;
      let dataProva = this.dateService.toIsoFormat(data.data);
      let prova = Prova.create(this.id, dataProva, data.professor, data.disciplina, data.turno, data.periodoLetivo, data.formato,data.observacoes);    
      //this.save(prova);

      this.service.salvar(prova).subscribe(
        (prova: any) => {
          this.router.navigate([`prova/editar/${prova.id}`]);
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

    public async getProfessores(){
      this.professores$ = await lastValueFrom(this.professorService.get());
    }

    public async getDisciplinas(){
      this.disciplina$ = await lastValueFrom(this.disciplinaService.get());
    }
  }
