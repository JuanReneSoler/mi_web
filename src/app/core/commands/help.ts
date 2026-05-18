import { ICommand } from "../abstracts/ICommand";

export class Help implements ICommand {
  Run(): string {
    return `
\n\rAvailable commands:
\r
help: show about all available commands.\n\r
about: show information about me.\n\r
whoami: show who i am.\n\r
clear: clean the terminal.\n\r
list projects: show all my work projects.\n\r
list skills: show. \n\r
list educ: \n\r
resume: \n\r
download\n\r
lang en\n\r
lang es\n\r`;
  }
}
