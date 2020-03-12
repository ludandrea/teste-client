import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/registro';
import { Observable } from 'rxjs';
import { SenacService } from '../senac.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  registros: Registro[];
  registrosSelecionados: Registro[];
  constructor(private blogPostService: SenacService) {
  }

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    this.blogPostService.getRegistros().subscribe(item => this.registros = item);
  }

  filtraRegistros(nome) {
    this.registrosSelecionados = this.registros.filter(r => r.nome == nome)
  }
}

