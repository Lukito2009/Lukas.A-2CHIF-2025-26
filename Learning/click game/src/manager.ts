import { ToolType } from "./tool-selection";

export class Manager {
  public result: number = 0;
  public currentToolType: ToolType = ToolType.PLUS;

  public handleClick(): number {
    if (this.currentToolType === ToolType.PLUS) {
      this.result += 10;
    } else if (this.currentToolType === ToolType.MINUS) {
      this.result -= 5;
    } else {
      this.result = 0;
    }
    return this.result;
  }
}
