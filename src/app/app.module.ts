import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosService } from '../app/services/cursos.service';
import { CursoTiposService } from '../app/services/curso-tipos.service';
import { FuncoesService } from '../app/services/funcoes.service';
import { OfertasService } from './services/ofertas.service';
import { AuthGuardService } from './services/auth-guard.service';

import { ListagemCursosComponent, DialogExclusaoCursosComponent } from './components/Curso/listagem-cursos/listagem-cursos.component';
import { NovoCursoComponent } from './components/Curso/novo-curso/novo-curso.component';
import { AtualizarCursoComponent } from './components/Curso/atualizar-curso/atualizar-curso.component';

import { ListagemFuncoesComponent, DialogExclusaoFuncoesComponente } from './components/Funcao/listagem-funcoes/listagem-funcoes.component';
import { NovaFuncaoComponent } from './components/Funcao/nova-funcao/nova-funcao.component';
import { AtualizarFuncaoComponent } from './components/Funcao/atualizar-funcao/atualizar-funcao.component';

import { NovaOfertaComponent } from './components/Oferta/nova-oferta/nova-oferta.component';
import { ListagemOfertasComponent, DialogExclusaoOfertasComponent } from './components/Oferta/listagem-ofertas/listagem-ofertas.component';
import { AtualizarOfertaComponent } from './components/Oferta/atualizar-oferta/atualizar-oferta.component';

import { RegistrarUsuarioComponent } from './components/Usuario/Registro/registrar-usuario/registrar-usuario.component';

import { UsuarioDashboardComponent } from './components/Dashboard/usuario-dashboard/usuario-dashboard.component';
import { UsuarioListaUcComponent } from './components/Dashboard/usuario-dashboard/usuario-lista-uc/usuario-lista-uc.component';

import { AdministradorListaCursosComponent } from './components/Dashboard/administrador-dashboard/administrador-lista-cursos/administrador-lista-cursos/administrador-lista-cursos.component';
import { AdministradorDashboardComponent } from './components/Dashboard/administrador-dashboard/administrador-dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { LoginUsuarioComponent } from './components/Usuario/Login/login-usuario/login-usuario.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/Dashboard/header/header.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

//PrimeNG Imports
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { UsuarioCalendarioAcademicoComponent } from './components/Dashboard/usuario-dashboard/usuario-calendario-academico/usuario-calendario-academico/usuario-calendario-academico.component';
import { ConceitosFeedbacksComponent } from './components/conceitos-feedbacks/conceitos-feedbacks.component';
import {AccordionModule} from 'primeng/accordion';


export function PegarTokenUsuario(){
  return localStorage.getItem("TokenUsuarioLogado");
}

@NgModule({
  declarations: [
    AppComponent,
    ListagemCursosComponent,
    NovoCursoComponent,
    AtualizarCursoComponent,
    DialogExclusaoCursosComponent,
    ListagemFuncoesComponent,
    NovaFuncaoComponent,
    AtualizarFuncaoComponent,
    DialogExclusaoFuncoesComponente,
    RegistrarUsuarioComponent,
    LoginUsuarioComponent,
    DashboardComponent,
    HeaderComponent,
    NovaOfertaComponent,
    ListagemOfertasComponent,
    AtualizarOfertaComponent,
    DialogExclusaoOfertasComponent,
    UsuarioDashboardComponent,
    AdministradorDashboardComponent,
    AdministradorListaCursosComponent,
    UsuarioListaUcComponent,
    UsuarioCalendarioAcademicoComponent,
    ConceitosFeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter: PegarTokenUsuario,
        allowedDomains: ['localhost:5099'],
        disallowedRoutes: []
      }      
    }),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    TabViewModule,
    ButtonModule,
    ProgressBarModule,
    TableModule,
    ToastModule,
    AccordionModule
  ],
  providers: [
    CursosService,
    CursoTiposService,
    FuncoesService,
    OfertasService,
    AuthGuardService,    
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
