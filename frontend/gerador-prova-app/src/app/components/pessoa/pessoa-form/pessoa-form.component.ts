import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../../BaseComponent.generic';
import { Pessoa } from '../../../model/pessoa.model';
import { PessoaService } from '../../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent extends BaseComponent<Pessoa> {

  protected override entityRoute: string = '/pessoa';
  form: FormGroup;

  constructor(service: PessoaService, router: Router){
    super(service, router);

    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      cpf: new FormControl(''),
      dataNascimento: new FormControl(''),
      email: new FormControl('')
    });
  
    this.id = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`
    if (this.id) {
      // Carrega os dados do item e atualiza o formulário
      this.loadItemById(this.id).then(() => this.updateForm());
    }
  }

  private updateForm(): void {
    if (this.item) {
      this.form.patchValue({
        id: this.item.id,
        nome: this.item.nome,
        cpf: this.item.cpf,
        dataNascimento: this.item.dataNascimento,
        email: this.item.email
      });
    }
  }

  salvar() {
    const data = this.form.value;
    let pessoa = Pessoa.create(this.id, data.nome, data.cpf, data.dataNascimento, data.email);
    this.save(pessoa);
  }
}
