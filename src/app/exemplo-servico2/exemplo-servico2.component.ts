import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css'],
})
export class ExemploServico2Component {
  constructor(public logger: LoggerService) {}

  descricao = '';

  adicionarDescricao() {
    this.logger.logar(`O nome ${this.descricao} foi adicionado btn: descricao`);
  }
}
