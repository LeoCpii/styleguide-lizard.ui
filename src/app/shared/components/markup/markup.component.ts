import { Component, Input } from '@angular/core';

export type IValidTypes = 'standard' | 'currency' | 'cpf' | 'cnpj' | 'account' | 'percent';

@Component({
  selector: 'app-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.scss'],
})
export class MarkupComponent {
  @Input() example: string;
  
  public state: 'copy' | 'check' = 'copy';

  constructor() { }

  get cls(): string[] {
    return [`uil-${this.state}`];
  }

  public copy(): void {
    this.state = 'check';
    const el = document.createElement('textarea');
    el.value = this.example;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => this.state = 'copy', 800);
  }
}
