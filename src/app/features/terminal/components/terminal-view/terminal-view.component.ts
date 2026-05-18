import { AfterViewInit, Component } from '@angular/core';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { Help } from '../../../../core/commands/help';
import { About } from '../../../../core/commands/about';
import { Whoami } from '../../../../core/commands/whoami';
import { List } from '../../../../core/commands/list';
import { Download } from '../../../../core/commands/download';

@Component({
  selector: 'terminal-view',
  imports: [],
  templateUrl: './terminal-view.component.html',
  styleUrl: './terminal-view.component.css',
})
export class TerminalViewComponent implements AfterViewInit {
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
      `\rType "help" to see available commands.
      \n\rType "gmode" to see grafical mode.`
    );
  }

  prompt() {
    this.terminal.write('\r\njsoler@homepage $> ');
  }

  listenTerminal() {
    this.terminal.onData((data) => {
      switch (data) {
        case '\r':
          //this.handleCommand(this.currentLine.trim());
          this.handleCommand(this.currentLine);
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
      this.terminal.writeln(new Help().Run());
    }
    else if (cmd === 'about') {
      this.terminal.writeln(new About().Run());
    }
    else if (cmd === 'whoami') {
      this.terminal.writeln(new Whoami().Run());
    }
    else if (cmd === 'list projects') {
      this.terminal.writeln(new List().Run(['projects']));
    }
    else if (cmd === 'list skills') {
      this.terminal.writeln(new List().Run(['skills']));
    }
    else if (cmd === 'download') {
      let result = new Download().Run(['--pdf']);
      this.terminal.writeln(result);
    }
    else if (cmd === 'download --word') {
      let result = new Download().Run(['--word']);
      this.terminal.writeln(result);
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
    else if (command === '') {
      //
    }
    else if (command === 'gmode') {
      window.open('/grafic');
    }
    else {
      this.terminal.writeln(`\n\rCommand not found: ${command}`)
    }
    this.prompt();
  }
}
