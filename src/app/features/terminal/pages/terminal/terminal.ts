import { Component } from '@angular/core';
import { TerminalViewComponent } from '../../components/terminal-view/terminal-view.component';

@Component({
  selector: 'app-terminal',
  imports: [TerminalViewComponent],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class Terminal { }
