import { Component, inject, OnInit } from '@angular/core';
import { ProvaService } from '../../../service/prova.service';
import { QuestaoService } from '../../../service/questao.service';
import { AlternativaService } from '../../../service/alternativa.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Alternativa } from '../../../model/alternativa.model';
import { Questao } from '../../../model/questao.model';

@Component({
  selector: 'app-layout',
  imports: [
    NgFor,
    NgIf,
    DatePipe
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  protected activatedRoute = inject(ActivatedRoute);
  id_prova: any;
  prova: any;
  questoes: any;//Questao[] | null = null; // Inicializado como null para verificar o carregamento
  alternativas: any;// { [key: number]: Alternativa[] } = {}; // Define corretamente o tipo

  constructor(
    private provaService: ProvaService,
    private questaoService: QuestaoService,
    private alternativaService: AlternativaService
  ) {
    this.id_prova = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`
  }

  ngOnInit(): void {
    this.getProva();
  }

  public async getProva() {
    try {
      this.prova = await lastValueFrom(this.provaService.getById(this.id_prova));
      this.getQuestoes(this.prova);
    } catch (error) {
      console.error('Erro ao buscar prova:', error);
    }
  }

  public async getQuestoes(prova: any) {
    try {
      this.questoes = await lastValueFrom(this.questaoService.findByProva(prova.id));
      // Inicializa as alternativas para cada questão
      this.questoes.forEach((questao: any) => this.getAlternativas(questao));
    } catch (error) {
      console.error('Erro ao buscar questões:', error);
      this.questoes = []; // Garante que questoes seja sempre um array
    }
  }
  

  public async getAlternativas(questao: any) {
    try {
      const alternativas = await lastValueFrom(this.alternativaService.findByQuestao(questao.id));
      // Adiciona as alternativas apenas quando disponíveis
      if (alternativas) {
        this.alternativas[questao.id] = alternativas;
      } else {
        this.alternativas[questao.id] = []; // Garante que a chave existe, mesmo que sem alternativas
      }
    } catch (error) {
      //console.error(`Erro ao buscar alternativas para a questão ${questao.id}:`, error);
      console.log(error);
      this.alternativas[questao.id] = []; // Define como array vazio em caso de erro
    }
  }
  
  
}
