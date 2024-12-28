import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProfessorService } from '../../service/professor.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-professor',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.css'
})
export class ProfessorComponent implements OnInit{

  professor$: any;

  constructor(private professorService: ProfessorService, private router: Router){

  }

  ngOnInit(): void {
    this.getProfessors();
  }

  private async getProfessors(){
    this.professor$ = await lastValueFrom(this.professorService.get());

  }

  public editar(id: number){
    this.router.navigate(['professor/editar/', id]);
    console.log(id);
  }

  public async remover(id: number){
    let ret = await lastValueFrom(this.professorService.remover(id));
    this.professor$ = await lastValueFrom(this.professorService.get());
  }



}
