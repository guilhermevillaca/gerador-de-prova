import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProvaComponent } from './components/prova/prova.component';
import { AlternativaComponent } from './components/alternativa/alternativa.component';
import { LayoutComponent } from './components/prova/layout/layout.component';
import { QuestaoComponent } from './components/questao/questao.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { AuthGuard } from './components/auth/auth.guard';
import { ProfessorFormComponent } from './components/professor/professor-form/professor-form.component';
import { CidadeComponent } from './components/cidade/cidade.component';
import { CidadeFormComponent } from './components/cidade/cidade-form/cidade-form.component';
import { PessoaFormComponent } from './components/pessoa/pessoa-form/pessoa-form.component';
import { ProvaFormComponent } from './components/prova/prova-form/prova-form.component';
import { DisciplinaFormComponent } from './components/disciplina/disciplina-form/disciplina-form.component';
import { QuestaoFormComponent } from './components/questao/questao-form/questao-form.component';
import { AlternativaFormComponent } from './components/alternativa/alternativa-form/alternativa-form.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'prova', component: ProvaComponent, canActivate: [AuthGuard]},
    {path: 'prova/novo', component: ProvaFormComponent, canActivate: [AuthGuard]},
    {path: 'prova/editar/:id', component: ProvaFormComponent, canActivate: [AuthGuard]},
    {path: 'questao/:id_prova', component: QuestaoComponent, canActivate: [AuthGuard]},
    {path: 'questao/:id_prova/novo', component: QuestaoFormComponent, canActivate: [AuthGuard]},
    {path: 'questao/:id_prova/editar/:id', component: QuestaoFormComponent, canActivate: [AuthGuard]},
    {path: 'alternativa/:id_questao', component: AlternativaComponent, canActivate: [AuthGuard]},
    {path: 'alternativa/:id_questao/novo', component: AlternativaFormComponent, canActivate: [AuthGuard]},
    {path: 'alternativa/:id_questao/editar/:id', component: AlternativaFormComponent, canActivate: [AuthGuard]},
    {path: 'layout', component: LayoutComponent, canActivate: [AuthGuard]},
    {path: 'pessoa', component: PessoaComponent, canActivate: [AuthGuard]},
    {path: 'pessoa/novo', component: PessoaFormComponent, canActivate: [AuthGuard]},
    {path: 'pessoa/editar/:id', component: PessoaFormComponent, canActivate: [AuthGuard]},
    {path: 'professor', component: ProfessorComponent, canActivate: [AuthGuard]},
    {path: 'professor/novo', component: ProfessorFormComponent, canActivate: [AuthGuard]},
    {path: 'professor/editar/:id', component: ProfessorFormComponent, canActivate: [AuthGuard]},
    {path: 'disciplina', component: DisciplinaComponent, canActivate: [AuthGuard]},
    {path: 'disciplina/novo', component: DisciplinaFormComponent, canActivate: [AuthGuard]},
    {path: 'disciplina/editar/:id', component: DisciplinaFormComponent, canActivate: [AuthGuard]},
    {path: 'cidade', component: CidadeComponent, canActivate: [AuthGuard]},
    {path: 'cidade/novo', component: CidadeFormComponent, canActivate: [AuthGuard]},
    {path: 'cidade/editar/:id', component: CidadeFormComponent, canActivate: [AuthGuard]},
];
