import { Component, inject, OnInit } from '@angular/core';
import { ProvaService } from '../../../service/prova.service';
import { QuestaoService } from '../../../service/questao.service';
import { AlternativaService } from '../../../service/alternativa.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{


  protected activatedRoute = inject(ActivatedRoute);
  id_prova: any;
  prova: any;
  constructor(private provaService: ProvaService, private questaoService: QuestaoService, private alternativaService: AlternativaService){
    this.id_prova = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`

  }
  
  ngOnInit(): void {
    this.getProva();
  }

  public async getProva(){
    this.prova = await lastValueFrom(this.provaService.getById(this.id_prova));
  }

}
