import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CidadeService } from '../../service/cidade.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cidade',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit{

  cidade$:any;

  constructor(private cidadeService: CidadeService){}

  ngOnInit(): void {
    this.getCidades();
  }

  public async getCidades(){
    this.cidade$ = await lastValueFrom(this.cidadeService.get());
  }
}
