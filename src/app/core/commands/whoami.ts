import { ICommand } from "../abstracts/ICommand";

export class Whoami implements ICommand {
  Run(): string {
    return '\n\rJuan René Soler Sirí'
  }
}
