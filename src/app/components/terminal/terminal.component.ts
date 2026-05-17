import { Component, AfterViewInit } from '@angular/core';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';

@Component({
  selector: 'app-terminal',
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css',
})
export class TerminalComponent implements AfterViewInit {

  terminal!: Terminal;
  fitAddon!: FitAddon;

  currentLine = '';
  commandHistory: string[] = [];
  historyIndex = -1;

  languaje = 'en';

  ngAfterViewInit(): void {
    this.fitAddon = new FitAddon();

    this.terminal = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#00ff00'
      },
      fontFamily: 'monospace',
      fontSize: 15
    });

    this.terminal.loadAddon(this.fitAddon);

    this.terminal.open(
      document.getElementById('terminal-container')!
    );

    this.fitAddon.fit();
    this.showWelcomeMessage();
    this.prompt();
    this.listenTerminal();
  }

  showWelcomeMessage() {
    this.terminal.writeln('Juan Rene Soler Terminal v1.0');
    this.terminal.writeln('');
    this.terminal.writeln(
      'Type "help" to see available commands.'
    );
    this.terminal.writeln('');
  }

  prompt() {
    this.terminal.write('\r\n$ ');
  }

  listenTerminal() {
    this.terminal.onData((data) => {
      switch (data) {
        case '\r':
          this.handleCommand(this.currentLine.trim());
          this.commandHistory.push(this.currentLine);
          this.historyIndex =
            this.commandHistory.length;
          this.currentLine = '';
          break;
        case '\u007F':
          if (this.currentLine.length > 0) {
            this.currentLine =
              this.currentLine.slice(0. - 1);
            this.terminal.write('\b \b');
          }
          break;
        default:
          this.currentLine += data;
          this.terminal.write(data);
      }
    });
  }

  handleCommand(command: string) {
    const cmd = command.toLocaleLowerCase();
    if (cmd === 'help') {
      this.terminal.writeln(`
Available commands:

about
whoami
list projects
list skills
list educ
resume
download
lang en
lang es
clear
`);
    }
    else if (cmd === 'about') {
      this.terminal.writeln(`
Software developer passionate about backend,
systems and interactive experiences.
`);
    }
    else if (cmd === 'whoami') {
      this.terminal.writeln('Juan Soler');
    }
    else if (cmd === 'list projects') {
      this.terminal.writeln(`
- Portfolio Terminal
- Invoice System
- Linux Server Automation
`);
    }
    else if (cmd === 'list skills') {
      this.terminal.writeln(`
- AngularJS
- C#
- SQL
- Linux
- Docker
`);
    }
    else if (cmd === 'download') {
      window.open('/assets/cv.pdf');
      this.terminal.writeln(`
  Downloading PDF resume...
`);
    }
    else if (cmd === 'download -w') {
      window.open('/assets/cv.docx');
      this.terminal.writeln(
        'Downloading Word resume...'
      );
    }
    else if (cmd === 'lang es') {
      this.languaje = 'es';
      this.terminal.writeln(
        'Idioma cambiado a español'
      );
    }
    else if (cmd === 'lang en') {
      this.languaje = 'en';
      this.terminal.writeln(
        'Language changed to English'
      );
    }
    else if (cmd === 'clear') {
      this.terminal.clear();
    }
    else {
      this.terminal.writeln(
        `Command not found: ${command}`
      )
    }
    this.prompt();
  }
}
