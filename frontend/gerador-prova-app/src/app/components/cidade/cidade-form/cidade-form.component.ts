import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CidadeService } from '../../../service/cidade.service';
import { EstadoService } from '../../../service/estado.service';
import { lastValueFrom, take } from 'rxjs';
import { Estado } from '../../../model/estado.model';
import { Cidade } from '../../../model/cidade.model';

@Component({
  selector: 'app-cidade-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit{

  estado$: any;
  id: any;
  private activateRoute = inject(ActivatedRoute);


  constructor(private cidadeService: CidadeService, private estadoService: EstadoService, private router: Router){

  }
  ngOnInit(): void {
    this.getEstados();
  }


  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    estado: new FormControl('')
  });

  public async getEstados(){
    this.estado$ = await lastValueFrom(this.estadoService.get());
  }

  public salvar(){
    let codigo = null;
    if(this.id){
      codigo = this.id;
    }
    let nome = this.form.controls.nome.value;
    let id_estado = Number(this.form.controls.estado.value);
 
    let cidade = Cidade.create(codigo, nome, id_estado);
    
    this.cidadeService.salvar(cidade).pipe(
      take(1)
    ).subscribe({
      next: cidade => this.router.navigate(['cidade']),
      error: erro => console.error(erro)
    });
  }
}
