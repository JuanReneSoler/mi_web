import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FitAddon } from '@xterm/addon-fit';
import { Terminal } from '@xterm/xterm';

@Component({
  selector: 'app-terminal',
  //standalone: true,
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  @ViewChild('terminalContainer', { static: true })
  terminalContainer!: ElementRef;

  terminal!: Terminal;
  fitAddon!: FitAddon;

  ngAfterViewInit(): void {

    this.terminal = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e'
      }
    });

    this.fitAddon = new FitAddon();

    this.terminal.loadAddon(this.fitAddon);

    this.terminal.open(this.terminalContainer.nativeElement);

    this.fitAddon.fit();

    this.terminal.writeln('Hola desde xterm.js en Angular');
    this.terminal.write('$ ');

    this.terminal.onData((data) => {
      this.terminal.write(data);
    });

    window.addEventListener('resize', () => {
      this.fitAddon.fit();
    });
  }
}
