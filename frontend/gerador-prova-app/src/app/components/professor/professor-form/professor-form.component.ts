import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PessoaService } from '../../../service/pessoa.service';
import { lastValueFrom } from 'rxjs';
import { Pessoa } from '../../../model/pessoa';
import { Professor } from '../../../model/professor';
import { ProfessorService } from '../../../service/professor.service';

@Component({
  selector: 'app-professor-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.css'
})
export class ProfessorFormComponent implements OnInit{

  pessoa$: any;
  professor: any;
  id: any;
  private activateRoute = inject(ActivatedRoute);


  form = new FormGroup({
    id: new FormControl<number|null>(null),
    grau: new FormControl<string>(''),
    pessoa: new FormControl<number|null>(null)    
  });

  constructor(private pessoaService: PessoaService, private professorService: ProfessorService, private router: Router){


  }
  ngOnInit(): void {
    this.getPessoas();
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.getProfessorById();
    }
  }

  private async getPessoas(){
    this.pessoa$ = await lastValueFrom(this.pessoaService.get());
  }

  public async getProfessorById(){
    this.professor = await lastValueFrom(this.professorService.getById(this.id));
    this.form.controls.id.setValue(this.professor.id);
    this.form.controls.grau.setValue(this.professor.grau);
    this.form.controls.pessoa.setValue(this.professor.pessoa?.id);
  }


  public salvar(){
    //todo
    let id_ = null;
    if(this.id){
      id_ = this.id;
    }
    let grau = this.form.controls.grau.value;
    let pessoa_ = this.form.controls.pessoa.value;
    let professor: Professor;
 
    professor = {
      "id": id_,
      "grau": grau,
      "pessoa": {
        "id": pessoa_,        
        "nome": null,
        "cpf": null,
        "email": null,
        "dataNascimento": null
      }
    };   
    

    this.professorService.salvar(professor).subscribe(
      professor => {
        this.router.navigate(['professor']);
      },
      erro => {
        console.log(erro);
      }
    );
  }

  

}
