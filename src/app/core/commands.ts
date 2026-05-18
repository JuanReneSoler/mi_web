export enum ListOptions {
  projects = 'projects',
  skills = 'skills'
}
export class Commands {
  private static listOptons: { [key: string]: string } = {
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
  static help() {
    return `
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
`;
  }
  static about() {
    return `
Software developer passionate about backend,
systems and interactive experiences.
`;
  }
  static whoami() {
    return 'Juan René Soler Sirí';
  }
  static list(param: ListOptions) {
    return this.listOptons[param];
  }
  static downloadPdf() {
    window.open('/assets/cv.pdf');
  }
  static downloadWord() {
    window.open('/assets/cv.docx');
  }
}
