import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-consulta-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-contato.component.html',
  styleUrls: ['./consulta-contato.component.css']
})
export class ConsultaContatoComponent implements OnInit {
  contatos: any[] = [];
  pesquisa: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.listarContatos();
  }

  listarContatos(): void {
    this.contatoService.listarContatos().subscribe(
      (response: any) => {
        this.contatos = response;
      },
      error => {
        alert("Erro ao buscar contatos: " + error.error.message);
      }
    );
  }

  marcarComoFavorito(contato: any): void {
    contato.favorito = !contato.favorito;
    this.contatoService.atualizarContato(contato.id, contato).subscribe(
      response => {
        alert("Contato atualizado com sucesso!");
      },
      error => {
        alert("Erro ao atualizar contato: " + error.error.message);
      }
    );
  }

  editarContato(contato: any): void {
    alert("Editar contato: " + contato.nome);
  }

  pesquisarContatos(): any[] {
    if (!this.pesquisa) {
      return this.contatos;
    }
    const pesquisaLower = this.pesquisa.toLowerCase();
    return this.contatos.filter(c =>
      (c.nome && c.nome.toLowerCase().includes(pesquisaLower)) ||
      (c.email && c.email.toLowerCase().includes(pesquisaLower)) ||
      (c.celular && c.celular.toLowerCase().includes(pesquisaLower)) ||
      (c.telefone && c.telefone.toLowerCase().includes(pesquisaLower))
    );
  }
}
