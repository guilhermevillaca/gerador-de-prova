import { inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseComponent<T> implements OnInit {
  items$: any; // Lista de itens (ex: categorias)
  item: T | null = null; // Item específico (ex: categoria selecionada ou editada)
  id: any; // ID do item para edição ou remoção
  // Propriedade abstrata para a rota da entidade
  protected abstract entityRoute: string;
  protected activatedRoute = inject(ActivatedRoute);
  

  constructor(
    protected service: { get: () => any; getById: (id: any) => any; remover: (id: any) => any; salvar: (item: T) => any },
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.loadItems();
    if (this.id) {
      this.loadItemById(this.id);
    }
  }

  async loadItems(): Promise<void> {
    this.items$ = await lastValueFrom(this.service.get());
  }

  async loadItemById(id: any): Promise<void> {
    this.item = await lastValueFrom(this.service.getById(id));
  }

  async remove(id: any): Promise<void> {
    await lastValueFrom(this.service.remover(id));
    this.loadItems();
  }

  save(item: T): void {
    this.service.salvar(item).subscribe(
      () => {
        this.router.navigate([this.entityRoute]);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  edit(id: any): void {
    this.router.navigate([this.entityRoute+`/editar/${id}`]);
  }

}
