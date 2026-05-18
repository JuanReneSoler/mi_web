import { ICommand } from "../abstracts/ICommand";

export enum ListOptions {
  projects = 'projects',
  skills = 'skills'
}
export class List implements ICommand {
  private listOptons: { [key: string]: string } = {
    projects: `
- Portfolio Terminal
- Invoice System
- Linux Server Automation
`,
    skills: `
- AngularJS
- C#
- SQL
- Linux
- Docker
`
  };
  Run(params: string[]): string {
    if (params.length > 0) throw Error("Parameters dont suported");
    let param = params[0];
    let flag = ListOptions[param as keyof typeof ListOptions];
    return this.listOptons[flag];
  }
  //
}
