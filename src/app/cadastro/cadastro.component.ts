import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colaborador } from '../models/colaborador';
import { SenacService } from '../senac.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  colaborador: Colaborador;

  constructor(private senacServiceService: SenacService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        registro: ['', [Validators.required]],
        indicador: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {
  }

  save() {
    this.colaborador = new Colaborador();
    this.colaborador.nome = this.form.get('nome').value;
    this.colaborador.registro = this.form.get('registro').value;
    this.colaborador.indicador = this.form.get('indicador').value;
    this.senacServiceService.saveColaborador(this.colaborador).subscribe(() => this.form.reset());
  }

}
