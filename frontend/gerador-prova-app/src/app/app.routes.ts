import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProvaComponent } from './prova/prova.component';
import { QuestaoComponent } from './questao/questao.component';
import { AlternativaComponent } from './alternativa/alternativa.component';
import { LayoutComponent } from './prova/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'prova', component: ProvaComponent},
    {path: 'questao', component: QuestaoComponent},
    {path: 'alternativa', component: AlternativaComponent},
    {path: 'layout', component: LayoutComponent}
];
