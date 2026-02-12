import "./styles.css";
import { ToolSelection, ToolType } from "./tool-selection";
import { Manager } from "./manager";

const manager = new Manager();

const output= document.getElementById('output') as HTMLDivElement


new ToolSelection((tool: ToolType) => {
  manager.currentToolType = tool;
  const result = manager.handleClick();
  output.textContent = String(result);
});
