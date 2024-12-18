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

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'prova', component: ProvaComponent, canActivate: [AuthGuard]},
    {path: 'questao', component: QuestaoComponent, canActivate: [AuthGuard]},
    {path: 'alternativa', component: AlternativaComponent, canActivate: [AuthGuard]},
    {path: 'layout', component: LayoutComponent, canActivate: [AuthGuard]},
    {path: 'pessoa', component: PessoaComponent, canActivate: [AuthGuard]},
    {path: 'professor', component: ProfessorComponent, canActivate: [AuthGuard]},
    {path: 'disciplina', component: DisciplinaComponent, canActivate: [AuthGuard]}
];
