import './styles.css'
import { ShapeManager } from './ShapeManager';
import { ToolSelection } from './tool-selection'
 
const shapeManager = new ShapeManager();
const ToolSelectionWidget = new ToolSelection((toolType) => shapeManager.currentToolType = toolType);