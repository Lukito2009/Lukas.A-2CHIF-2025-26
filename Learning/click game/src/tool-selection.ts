export enum ToolType {
  PLUS,
  MINUS,
  RESET,
}

type ToolChangeCallback = (tool: ToolType) => void;

export class ToolSelection {
  private toolContainer: HTMLDivElement;

  constructor(
    private callback: ToolChangeCallback,
    toolContainerId: string = 'tool-container'
  ) {
 

   // this.toolContainer = document.getElementById(toolContainerId) as HTMLDivElement;
    this.toolContainer = document.getElementById(toolContainerId)! as HTMLDivElement;

    this.toolContainer.appendChild(this.createToolButton(ToolType.PLUS, "Plus 10", true));
    this.toolContainer.appendChild(this.createToolButton(ToolType.MINUS, "Minus 5"));
    this.toolContainer.appendChild(this.createToolButton(ToolType.RESET, "Reset"));
  }

  private createToolButton(
    toolType: ToolType,
    label: string,
    isSelected: boolean = false
  ): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = label;

    button.addEventListener("click", () => {
      this.unselectAll();
      button.className = "selected";
      this.callback(toolType);
    });

    if (isSelected) {
      button.className = "selected";
      
    }

    return button;
  }

  private unselectAll() {
    for (const child of this.toolContainer.children) {
      (child as HTMLElement).className = "";
    }
  }
}
