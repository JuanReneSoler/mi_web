import { ICommand } from "../abstracts/ICommand";

export class About implements ICommand {
  Run(): string {
    return `
\rSoftware developer passionate about backend,
\rsystems and interactive experiences.`;
  }
}
