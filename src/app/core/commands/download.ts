import { ICommand } from "../abstracts/ICommand";

export class Download implements ICommand {
  Run(params: string[]): string {
    var param = params[0];
    if (param === "--word") {
      window.open('/assets/cv.docx');
      return "'Downloading Word resume...'";
    }
    if (param === "--pdf") {
      window.open('/assets/cv.pdf');
      return "'Downloading PDF resume...'";
    }
    throw new Error("parameter not valid!");
  }
}
