import { Router } from "@angular/router";
import { ICommand } from "../abstracts/ICommand";

export class Mode implements ICommand {

  constructor(private router: Router) { }

  Run(params: string[]): string {
    let param = params[0];
    if (param === "-g") {
      this.router.navigate(["/grafic"]);
      return "";
    }
    if (param === "-c") {
      this.router.navigate(["/"]);
      return '';
    }
    throw Error("parameter not avilable.");
  }
}
