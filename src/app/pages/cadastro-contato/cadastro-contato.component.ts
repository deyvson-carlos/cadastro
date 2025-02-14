import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-cadastro-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent {
  contato = { nome: '', email: '', celular: '', telefone: '' };

  celularRegex = /^[0-9]{10,11}$/;

  constructor(private contatoService: ContatoService) {}

  isValidCelular(celular: string): boolean {
    return this.celularRegex.test(celular);
  }

  cadastrarContato() {
    if (!this.contato.nome || !this.contato.email || !this.contato.celular) {
      alert("Preencha todos os campos obrigatórios: nome, email e celular!");
      return;
    }

    if (!this.isValidCelular(this.contato.celular)) {
      alert("O celular deve conter 10 ou 11 números!");
      return;
    }

    this.contatoService.cadastrarContato(this.contato).subscribe(
      response => {
        alert("Contato cadastrado com sucesso!");
        this.contato = { nome: '', email: '', celular: '', telefone: '' };
      },
      error => {
        alert("Erro ao cadastrar contato: " + error.error.message);
      }
    );
  }
}
