import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primero-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwowayDataBidingComponent } from './twoway-data-biding/twoway-data-biding.component';
import { FormsModule } from '@angular/forms';
import { RederizandoListasComponent } from './rederizando-listas/rederizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ExemploServicos1Component } from './exemplo-servicos1/exemplo-servicos1.component';
import { ExemploServico2Component } from './exemplo-servico2/exemplo-servico2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, PrimeiroComponenteComponent, SegundoComponenteComponent, MultiplicaPorPipe, PipeCustomizadoComponent, TwowayDataBidingComponent, RederizandoListasComponent, ComponentePersonalizadoComponent, ExemploServicos1Component, ExemploServico2Component, CicloDeVidaComponent, CicloDeVidaPaiComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
