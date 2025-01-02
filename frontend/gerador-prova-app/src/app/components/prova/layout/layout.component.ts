import { Component, inject, OnInit } from '@angular/core';
import { ProvaService } from '../../../service/prova.service';
import { QuestaoService } from '../../../service/questao.service';
import { AlternativaService } from '../../../service/alternativa.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Alternativa } from '../../../model/alternativa.model';
import { Questao } from '../../../model/questao.model';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Prova } from '../../../model/prova.model';

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
      this.getQuestoes();
     // this.testarQuestoesEAlternativas();
    } catch (error) {
      console.error('Erro ao buscar prova:', error);
    }
  }

  public async getQuestoes() {
    try {
      this.questoes = await lastValueFrom(this.questaoService.findByProva(this.id_prova));
    } catch (error) {
      console.error('Erro ao buscar questões:', error);
      this.questoes = []; // Garante que questoes seja sempre um array
    }
  }  

  
  public exportarParaPDF(): void {
    const elemento = document.getElementById('conteudo-pdf'); // ID do elemento HTML a ser convertido

    if (!elemento) {
      console.error('Elemento não encontrado!');
      return;
    }

    html2canvas(elemento).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Converte o elemento capturado em uma imagem
      const pdf = new jsPDF({
        orientation: 'portrait', // ou 'landscape'
        unit: 'mm',
        format: 'a4',
      });

      const larguraPDF = pdf.internal.pageSize.getWidth();
      const alturaPDF = (canvas.height * larguraPDF) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, larguraPDF, alturaPDF); // Adiciona a imagem ao PDF
      let nome = Prova.getNomeDinamico(this.prova);
      pdf.save(nome + '.pdf'); // Salva o PDF com o nome desejado
    });
  }
  
}
